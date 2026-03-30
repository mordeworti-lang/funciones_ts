// Utils - Utilidades del Proyecto

// Funciones auxiliares que pueden ser reutilizadas en varios bloques

/**
 * Formatea una fecha de tupla a string legible
 * @param fecha - Tupla [día, mes, año]
 * @returns String con formato "dd/mm/yyyy"
 */
export function formatoFecha(fecha: [number, number, number]): string {
  const [dia, mes, año] = fecha;
  return `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${año}`;
}

/**
 * Valida si un desarrollador existe por ID
 * @param id - ID del desarrollador a buscar
 * @param desarrolladores - Array de desarrolladores
 * @returns boolean indicando si existe
 */
export function existeDesarrollador(id: number, desarrolladores: any[]): boolean {
  return desarrolladores.some(dev => dev.id === id);
}

/**
 * Calcula el tamaño de un Pull Request basado en líneas modificadas
 * @param lineasAgregadas - Líneas agregadas
 * @param lineasEliminadas - Líneas eliminadas
 * @returns Categoría del tamaño
 */
export function calcularTamañoPR(lineasAgregadas: number, lineasEliminadas: number): string {
  const total = lineasAgregadas + lineasEliminadas;
  if (total <= 50) return "Pequeño";
  if (total <= 200) return "Mediano";
  return "Grande";
}

/**
 * Cuenta elementos por estado
 * @param items - Array de elementos con propiedad estado
 * @param estado - Estado a contar
 * @returns Número de elementos con ese estado
 */
export function contarPorEstado(items: any[], estado: string): number {
  return items.filter(item => item.estado === estado).length;
}
