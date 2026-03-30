// Functions - Bloque 1 — Funciones de utilidad
// Usar: function declaration

import { Desarrollador, Bug, PullRequest } from '../types';

// 1.1
export function formatoFecha(fecha: [number, number, number]): string {

  const [dia, mes, año] = fecha ;
  
  const diaFomatedo = dia < 10 ? `0${dia}` : dia ;
  const mesFomatedo = mes < 10 ? `0${mes}` : mes ;

  return `${diaFomatedo}/${mesFomatedo}/${año}`;
}

// 1.2

export function presentarDesarrollador(dev: Desarrollador): string {
    
    const nivelMayusculas = dev.nivel.toUpperCase();
    
    const disponibilidad = dev.disponible ? "Disponible" : "No disponible";
    
  
    const presentacion = `${nivelMayusculas}\n├── Nombre: ${dev.nombre}\n├── Rol: ${dev.rol}\n└── Estado: ${disponibilidad}`;
    return presentacion;
}

// 1.3
// Recibe un Bug y retorna true si:
// - Prioridad es alta o crítica
// - Estado no es resuelto ni cerrado
// - Ambiente es staging o producción
export function esBugUrgente(bug: Bug): boolean {
  // Implementar aquí:
  // 1. Verificar si prioridad es 'alta' o 'crítica'
  // 2. Verificar que estado no sea 'resuelto' ni 'cerrado'
  // 3. Verificar que ambiente sea 'staging' o 'producción'
  // 4. Retornar true solo si se cumplen TODAS las condiciones
  return false;
}

// 1.4
// Recibe un PullRequest y clasifica su tamaño:
// - Pequeño: <= 50 líneas totales (agregadas + eliminadas)
// - Mediano: > 50 y <= 200 líneas totales
// - Grande: > 200 líneas totales
export function clasificarPR(pr: PullRequest): string {
  // Implementar aquí:
  // 1. Sumar lineasAgregadas + lineasEliminadas
  // 2. Clasificar según el total:
  //    - <= 50 -> "Pequeño"
  //    - > 50 y <= 200 -> "Mediano"  
  //    - > 200 -> "Grande"
  // 3. Retornar la clasificación
  return "";
}
