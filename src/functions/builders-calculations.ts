// Functions - Bloque 4 — Construcción y cálculo
// Libre (justificar elección) - Puedes usar function declarations o arrow functions

import { ResumenDev, Proyecto, Desarrollador, Bug, PullRequest } from '../types';

// 4.1
// Construir un ResumenDev con:
// - Datos básicos (nombre, rol, nivel, disponible)
// - Cantidad de bugs asignados
// - Bugs resueltos (estado === 'resuelto')
// - PRs abiertos (estado === 'abierto')
// - Disponibilidad
export function construirResumenDev(dev: Desarrollador, bugs: Bug[], prs: PullRequest[]): ResumenDev {
  // Implementar aquí:
  // 1. Filtrar bugs asignados al desarrollador (bug.idAsignado === dev.id)
  // 2. Contar bugs resueltos de esos asignados
  // 3. Filtrar PRs del desarrollador (pr.idAutor === dev.id)
  // 4. Contar PRs abiertos de esos del desarrollador
  // 5. Construir objeto ResumenDev con todos los datos
  return {} as ResumenDev;
}

// 4.2
// Contar bugs por estado:
// - abiertos: bugs con estado === 'abierto'
// - enRevision: bugs con estado === 'en revisión'
// - resueltos: bugs con estado === 'resuelto'
// - cerrados: bugs con estado === 'cerrado'
export function contarBugsPorEstado(bugs: Bug[]): object {
  // Implementar aquí:
  // 1. Crear objeto con las 4 propiedades inicializadas en 0
  // 2. Usar filter() para cada estado y contar con length
  // 3. Retornar objeto con los contadores
  return {
    abiertos: 0,
    enRevision: 0,
    resueltos: 0,
    cerrados: 0
  };
}

// 4.3
// Obtener todas las tecnologías del equipo sin repetir.
// Recibir array de desarrolladores y retornar array único de tecnologías
export function obtenerTecnologiasUnicas(desarrolladores: Desarrollador[]): string[] {
  // Implementar aquí:
  // 1. Usar flatMap() para extraer todos los stacks en un solo array
  // 2. Usar Set para eliminar duplicados
  // 3. Convertir Set a array con Array.from()
  // 4. Opcional: ordenar alfabéticamente con sort()
  return [];
}

// 4.4
// Imprimir un reporte del proyecto en consola con:
// - Información general (nombre, repositorio, stack)
// - Lista de bugs (usar funciones de bloques anteriores)
// - Lista de pull requests (usar funciones de bloques anteriores)
export function imprimirReporteProyecto(proyecto: Proyecto): void {
  // Implementar aquí:
  // 1. Imprimir encabezado con información general del proyecto
  // 2. Imprimir sección de bugs con formato legible
  // 3. Imprimir sección de pull requests con formato legible
  // 4. Reutilizar funciones ya creadas (formatoFecha, clasificarPR, etc.)
  // 5. Usar console.log() con formato claro y organizado
}
