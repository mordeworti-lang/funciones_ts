// Functions - Bloque 4 — Construcción y cálculo
// Libre (justificar elección) - Puedes usar function declarations o arrow functions

import { ResumenDev, Proyecto, Desarrollador, Bug, PullRequest } from '../models/interfaces';
import { obtenerBugsAsignados, filtrarBugsPorEstado } from './search-filter';
import { formatoFecha, esBugUrgente, clasificarPR } from './utilities';

// 4.1

export function construirResumenDev(dev: Desarrollador, bugs: Bug[], prs: PullRequest[]): ResumenDev {
  const bugsAsignados = obtenerBugsAsignados(bugs, dev.id);
  const bugsResueltos = filtrarBugsPorEstado(bugsAsignados, 'resuelto').length;
  const prsAbiertos = prs.filter(pr => pr.idAutor === dev.id && pr.estado === 'abierto').length;

  return {
    nombre: dev.nombre,
    rol: dev.rol,
    nivel: dev.nivel,
    bugsAsignados: bugsAsignados.length,
    bugsResueltos,
    prsAbiertos,
    disponible: dev.disponible
  };
}

// 4.2

export function contarBugsPorEstado(bugs: Bug[]): { abiertos: number; enRevision: number; resueltos: number; cerrados: number } {
  const abiertos = filtrarBugsPorEstado(bugs, 'abierto').length;
  const enRevision = filtrarBugsPorEstado(bugs, 'en revision').length;
  const resueltos = filtrarBugsPorEstado(bugs, 'resuelto').length;
  const cerrados = filtrarBugsPorEstado(bugs, 'cerrado').length;
  
  return {
    abiertos,
    enRevision,
    resueltos,
    cerrados
  };
}

// 4.3

export function obtenerTecnologiasUnicas(desarrolladores: Desarrollador[]): string[] {
  const tecnologias = desarrolladores.flatMap(dev => dev.stack);
  const listaTotalTecnologias = [...new Set(tecnologias)];
  listaTotalTecnologias.sort();
  return listaTotalTecnologias;
}

// 4.4
// Función auxiliar para imprimir encabezado del proyecto
function imprimirEncabezadoProyecto(proyecto: Proyecto): void {
  console.log(`=== Reporte del Proyecto ===`);
  console.log(`Nombre: ${proyecto.nombre}`);
  console.log(`Repositorio: ${proyecto.repositorio}`);
  console.log(`Stack: ${proyecto.stack.join(", ")}\n`);
}

// Función auxiliar para imprimir sección de bugs
function imprimirSeccionBugs(bugs: Bug[]): void {
  console.log("--- Bugs del Proyecto ---");
  bugs.forEach(bug => {
    const urgencia = esBugUrgente(bug) ? " URGENTE" : "";
    const fechaFormateada = formatoFecha(bug.fechaReporte);
    console.log(`• ${bug.titulo} (${bug.prioridad}) - ${bug.estado} ${urgencia}`);
    console.log(`  Reportado: ${fechaFormateada} | Ambiente: ${bug.ambiente}`);
    console.log(`  Reproducible: ${bug.reproducible ? "Sí" : "No"}\n`);
  });
}

// Función auxiliar para imprimir sección de pull requests
function imprimirSeccionPRs(prs: PullRequest[]): void {
  console.log("--- Pull Requests ---");
  prs.forEach(pr => {
    const clasificacion = clasificarPR(pr);
    const revisores = pr.revisores.length > 0 ? pr.revisores.join(", ") : "Sin revisores";
    console.log(`• ${pr.titulo}`);
    console.log(`  Autor: Dev ID ${pr.idAutor} | Tamaño: ${clasificacion}`);
    console.log(`  Estado: ${pr.estado} | Revisores: ${revisores}`);
    console.log(`  Líneas: +${pr.lineasAgregadas} / -${pr.lineasEliminadas}\n`);
  });
}

// Función auxiliar para imprimir estadísticas
function imprimirEstadisticas(proyecto: Proyecto): void {
  console.log("--- Estadísticas del Proyecto ---");
  const stats = contarBugsPorEstado(proyecto.bugs);
  console.log(`Total Bugs: ${proyecto.bugs.length}`);
  console.log(`Total Pull Requests: ${proyecto.pullRequests.length}`);
  console.log(`Bugs Abiertos: ${stats.abiertos}`);
  console.log(`Bugs en Revisión: ${stats.enRevision}`);
  console.log(`Bugs Resueltos: ${stats.resueltos}`);
  console.log(`Bugs Cerrados: ${stats.cerrados}`);
}

// Función principal que orquesta el reporte
export function imprimirReporteProyecto(proyecto: Proyecto): void {
  imprimirEncabezadoProyecto(proyecto);
  imprimirSeccionBugs(proyecto.bugs);
  imprimirSeccionPRs(proyecto.pullRequests);
  imprimirEstadisticas(proyecto);
}
