// Functions - Bloque 3 — Arrow functions de una línea
// Sin llaves y sin return - DEBE SER UNA SOLA LÍNEA

import { Desarrollador, Bug, PullRequest } from '../types';

// 3.1
// Retornar true si el desarrollador es senior o lead.
// Usar operador OR (||) para verificar dev.nivel === 'senior' || dev.nivel === 'lead'
export const esSeniorOLead = (dev: Desarrollador): boolean => dev.nivel === 'senior' || dev.nivel === 'lead';

// 3.2
// Retornar título en mayúsculas si el bug es crítico, si no normal.
// Usar operador ternario: condition ? value_if_true : value_if_false
// Usar método toUpperCase() para convertir a mayúsculas
export const tituloCriticoEnMayuscula = (bug: Bug): string => bug.prioridad === 'crítica' ? bug.titulo.toUpperCase() : bug.titulo;

// 3.3
// Retornar true si el PR está aprobado y tiene revisores.
// Usar operador AND (&&) para verificar ambas condiciones
export const esAprobadoConRevisores = (pr: PullRequest): boolean => pr.estado === 'aprobado' && pr.revisores.length > 0;

// 3.4
// Retornar el nombre de un desarrollador por id o un mensaje si no existe.
// Usar método find() para buscar el desarrollador
// Usar operador ternario para retornar nombre o mensaje por defecto
export const nombrePorId = (id: number, desarrolladores: Desarrollador[]): string => 
  desarrolladores.find(dev => dev.id === id)?.nombre || `Desarrollador con ID ${id} no encontrado`;
