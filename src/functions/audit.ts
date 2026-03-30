// Functions - Bloque 5 — Auditoría
// Generar alertas sobre problemas en el proyecto

import { Bug, PullRequest, Desarrollador } from '../types';

// 5.1
// Generar alertas sobre bugs:
// - Bugs críticos abiertos en producción
// - Bugs no reproducibles abiertos
// - Desarrolladores con muchos bugs abiertos (más de 3)
// - Bugs en revisión con dev no disponible
export function generarAlertasBugs(bugs: Bug[], desarrolladores: Desarrollador[]): string[] {
  // Implementar aquí:
  // 1. Crear array vacío de alertas
  // 2. Buscar bugs críticos abiertos en producción y agregar alerta
  // 3. Buscar bugs no reproducibles abiertos y agregar alerta
  // 4. Contar bugs abiertos por desarrollador y alertar si > 3
  // 5. Buscar bugs en revisión cuyo desarrollador no está disponible
  // 6. Retornar array con todas las alertas generadas
  return [];
}

// 5.2
// Generar alertas sobre pull requests:
// - PRs abiertos sin revisores
// - PRs aprobados muy grandes (más de 300 líneas totales)
// - PRs cuyo autor no está disponible
export function generarAlertasPRs(prs: PullRequest[], desarrolladores: Desarrollador[]): string[] {
  // Implementar aquí:
  // 1. Crear array vacío de alertas
  // 2. Buscar PRs abiertos sin revisores (revisores.length === 0)
  // 3. Buscar PRs aprobados con más de 300 líneas totales
  // 4. Para cada PR, verificar si su autor está disponible
  // 5. Agregar alertas correspondientes al array
  // 6. Retornar array con todas las alertas generadas
  return [];
}
