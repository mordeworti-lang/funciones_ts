// Functions - Bloque 3 — Arrow functions de una línea
// Sin llaves y sin return - DEBE SER UNA SOLA LÍNEA

import { Desarrollador, Bug, PullRequest } from '../models/interfaces';

export const esSeniorOLead = (dev: Desarrollador): boolean => dev.nivel === 'senior' || dev.nivel === 'lead';


export const tituloCriticoEnMayuscula = (bug: Bug): string => bug.prioridad === 'crítica' ? bug.titulo.toUpperCase() : bug.titulo;

export const esAprobadoConRevisores = (pr: PullRequest): boolean => pr.estado === 'aprobado' && pr.revisores.length > 0;

export const nombrePorId = (id: number, desarrolladores: Desarrollador[]): string => 
  desarrolladores.find(dev => dev.id === id)?.nombre || `Desarrollador con ID ${id} no encontrado`;
