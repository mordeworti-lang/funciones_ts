// Functions - Bloque 5 — Auditoría
// Generar alertas sobre problemas en el proyecto

import { Bug, PullRequest, Desarrollador } from '../models/interfaces';
import { filtrarBugsPorEstado, obtenerBugsAsignados } from './search-filter';

// 5.1

export function generarAlertasBugs(bugs: Bug[], desarrolladores: Desarrollador[]): string[] {
  const alertas: string[] = [];
  
  // Bugs críticos abiertos en producción
  const criticosProduccion = bugs.filter(bug => 
    bug.prioridad === 'crítica' && bug.estado === 'abierto' && bug.ambiente === 'producción'
  );
  
  // Bugs no reproducibles abiertos
  const noReproducibles = bugs.filter(bug => 
    !bug.reproducible && bug.estado === 'abierto'
  );
  
  // Desarrolladores con muchos bugs abiertos
  desarrolladores.forEach(dev => {
    const bugsDev = obtenerBugsAsignados(bugs, dev.id);
    if (bugsDev.length > 3) {
      alertas.push(` ${dev.nombre} tiene ${bugsDev.length} bugs abiertos`);
    }
  });
  
  // Bugs en revisión con dev no disponible
  const bugsRevision = filtrarBugsPorEstado(bugs, 'en revisión');
  bugsRevision.forEach(bug => {
    const dev = desarrolladores.find(d => d.id === bug.idAsignado);
    if (dev && !dev.disponible) {
      alertas.push(` Bug en revisión con dev no disponible: ${bug.titulo}`);
    }
  });
  
  criticosProduccion.forEach(bug => 
    alertas.push(` Bug crítico en producción: ${bug.titulo}`)
  );
  
  noReproducibles.forEach(bug => 
    alertas.push(` Bug no reproducible: ${bug.titulo}`)
  );
  
  return alertas;
}

// 5.2

export function generarAlertasPRs(prs: PullRequest[], desarrolladores: Desarrollador[]): string[] {
  const alertas: string[] = [];
  
  // PRs abiertos sin revisores
  const prsSinRevisores = prs.filter(pr => 
    pr.estado === 'abierto' && pr.revisores.length === 0
  );
  
  // PRs aprobados muy grandes
  const prsGrandes = prs.filter(pr => 
    pr.estado === 'aprobado' && (pr.lineasAgregadas + pr.lineasEliminadas) > 300
  );
  
  // PRs cuyo autor no está disponible
  prs.forEach(pr => {
    const autor = desarrolladores.find(d => d.id === pr.idAutor);
    if (autor && !autor.disponible) {
      alertas.push(` PR de dev no disponible: ${pr.titulo}`);
    }
  });
  
  prsSinRevisores.forEach(pr => 
    alertas.push(` PR sin revisores: ${pr.titulo}`)
  );
  
  prsGrandes.forEach(pr => 
    alertas.push(` PR muy grande: ${pr.titulo}`)
  );
  
  return alertas;
}
