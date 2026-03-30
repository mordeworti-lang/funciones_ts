// Functions - Bloque 2 — Búsqueda y filtrado
// Usar: arrow functions con llaves {}

import { Desarrollador, Bug, PullRequest } from '../models/interfaces';
import { validarExiste } from '../validacion/existencia';

// 2.1

export const filtrarDisponibles = (desarrolladores: Desarrollador[]): Desarrollador[] => {
  if (!validarExiste(desarrolladores)) {
    return [];
  }
  return desarrolladores.filter(dev => dev.disponible);
};

// 2.2

export const filtrarBugsPorEstado = (bugs: Bug[], estado: string): Bug[] => {
  if (!validarExiste(bugs)) {
    return [];
  }
  return bugs.filter(bug => bug.estado === estado);
};

// 2.3

export const obtenerBugsAsignados = (bugs: Bug[], idDev: number): Bug[] => {
  if (!validarExiste(bugs)) {
    return [];
  }
  return bugs.filter(bug => bug.idAsignado === idDev);
};

// 2.4

export const obtenerPRsSinRevisores = (prs: PullRequest[]): PullRequest[] => {
  if(!validarExiste(prs)) {
    return [];
  }
  return prs.filter(pr => pr.revisores.length === 0);
};

// 2.5

export const buscarDevsPorTecnologia = (desarrolladores: Desarrollador[], tecnologia: string): Desarrollador[] => {
  if(!validarExiste(desarrolladores)) {
    return [];
  }
  return desarrolladores.filter(dev => dev.stack.includes(tecnologia));
};
