// Functions - Bloque 2 — Búsqueda y filtrado
// Usar: arrow functions con llaves {}

import { Desarrollador, Bug, PullRequest } from '../types';

// 2.1
// Filtrar desarrolladores disponibles.
// Recibe array de desarrolladores y retorna solo aquellos con disponible: true
export const filtrarDisponibles = (desarrolladores: Desarrollador[]): Desarrollador[] => {
  // Implementar aquí:
  // 1. Usar método filter() sobre el array de desarrolladores
  // 2. Filtrar por la propiedad disponible === true
  // 3. Retornar el array filtrado
  return [];
};

// 2.2
// Filtrar bugs por estado.
// Recibe array de bugs y un estado, retorna solo los bugs con ese estado
export const filtrarBugsPorEstado = (bugs: Bug[], estado: string): Bug[] => {
  // Implementar aquí:
  // 1. Usar método filter() sobre el array de bugs
  // 2. Filtrar por bug.estado === estado
  // 3. Retornar el array filtrado
  return [];
};

// 2.3
// Obtener bugs asignados a un desarrollador por id.
// Recibe array de bugs y un id de desarrollador, retorna los bugs asignados a ese dev
export const obtenerBugsAsignados = (bugs: Bug[], idDev: number): Bug[] => {
  // Implementar aquí:
  // 1. Usar método filter() sobre el array de bugs
  // 2. Filtrar por bug.idAsignado === idDev
  // 3. Retornar el array con los bugs asignados
  return [];
};

// 2.4
// Obtener pull requests sin revisores.
// Recibe array de PRs y retorna solo aquellos con array de revisores vacío
export const obtenerPRsSinRevisores = (prs: PullRequest[]): PullRequest[] => {
  // Implementar aquí:
  // 1. Usar método filter() sobre el array de PRs
  // 2. Filtrar por pr.revisores.length === 0
  // 3. Retornar el array de PRs sin revisores
  return [];
};

// 2.5
// Buscar desarrolladores por tecnología en su stack.
// Recibe array de desarrolladores y una tecnología, retorna los que la tienen en su stack
export const buscarDevsPorTecnologia = (desarrolladores: Desarrollador[], tecnologia: string): Desarrollador[] => {
  // Implementar aquí:
  // 1. Usar método filter() sobre el array de desarrolladores
  // 2. Para cada dev, verificar si tecnología está en dev.stack
  // 3. Usar método includes() del array stack
  // 4. Retornar el array de desarrolladores que usan esa tecnología
  return [];
};
