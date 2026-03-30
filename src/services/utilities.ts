// Functions - Bloque 1 — Funciones de utilidad
// Usar: function declaration

import { Desarrollador, Bug, PullRequest } from '../models/interfaces';
import { validarExiste } from '../validacion/existencia';


// 1.1
export function formatoFecha(fecha: [number, number, number]): string {
  if (!validarExiste(fecha)) {
    return "Fecha no existe";
  }
  const [dia, mes, año] = fecha ;
  
  const diaFomatedo = dia < 10 ? `0${dia}` : dia ;
  const mesFomatedo = mes < 10 ? `0${mes}` : mes ;

  return `${diaFomatedo}/${mesFomatedo}/${año}`;
}

// 1.2

export function presentarDesarrollador(dev: Desarrollador): string {
    if (!validarExiste(dev)) {
      return "Desarrollador no existe";
    }
    const nivelMayusculas = dev.nivel.toUpperCase();
    
    const disponibilidad = dev.disponible ? "Disponible" : "No disponible";
    
  
    const presentacion = `${nivelMayusculas}\n├── Nombre: ${dev.nombre}\n├── Rol: ${dev.rol}\n└── Estado: ${disponibilidad}`;
    return presentacion;
}

// 1.3

export function esBugUrgente(bug: Bug): boolean {
  if (!validarExiste(bug)) {
    return false;
  }
  const prioridadUrgente = bug.prioridad === 'alta' || bug.prioridad === 'crítica';

  const estadoNoUrgente = bug.estado !== 'resuelto' && bug.estado !== 'cerrado';

  const ambienteUrgente = bug.ambiente === 'staging' || bug.ambiente === 'producción';

  if (prioridadUrgente && estadoNoUrgente && ambienteUrgente) {
    return true;
  }
  return false;
}

// 1.4

export function clasificarPR(pr: PullRequest): string {
  if (!validarExiste(pr)) {
    return "no existe";
  }
  const totalLineas = pr.lineasAgregadas + pr.lineasEliminadas;
  if (totalLineas <= 50){
    return "Pequeño";
  }else if (totalLineas > 50 && totalLineas <= 200){
    return "Mediano";
  }else {
    return "Grande";
  }
}
