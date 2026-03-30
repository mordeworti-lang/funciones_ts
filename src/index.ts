// Taller — Funciones en TypeScript
// Individual · Duración: 90 minutos

import { equipo, bugs, pullRequests, proyecto } from './data/constants';
import { Desarrollador, Bug, PullRequest, ResumenDev } from './types';
import { presentarDesarrollador } from './functions/utilities';
// Importar funciones de cada bloque (descomentar cuando estén implementadas)
// import * as searchFilter from './functions/search-filter';
// import * as oneLiners from './functions/one-liners';
// import * as buildersCalculations from './functions/builders-calculations';
// import * as audit from './functions/audit';
console.log("=== Taller de Funciones en TypeScript ===");
console.log("Estructura modular organizada y lista para empezar.");
console.log("Datos cargados:");
console.log(`- Desarrolladores: ${equipo.length}`);
console.log(`- Bugs: ${bugs.length}`);
console.log(`- Pull Requests: ${pullRequests.length}`);
console.log("\n¡Comienza a implementar las funciones en cada módulo!");

// Prueba de funciones con formato mejorado
console.log("\n=== Pruebas de Funciones ===");
console.log(presentarDesarrollador(equipo[0]));
console.log("---");
console.log(presentarDesarrollador(equipo[1]));

// Ejemplo de cómo probar tus funciones (descomentar cuando estén listas):
// console.log("\n=== Pruebas Utilities ===");
// console.log(utilities.formatoFecha([25, 12, 2025]));
// console.log(utilities.presentarDesarrollador(equipo[0]));
// console.log(utilities.esBugUrgente(bugs[0]));
// console.log(utilities.clasificarPR(pullRequests[0]));

// console.log("\n=== Pruebas Search Filter ===");
// console.log(searchFilter.filtrarDisponibles(equipo));
// console.log(searchFilter.filtrarBugsPorEstado(bugs, 'abierto'));
// console.log(searchFilter.obtenerBugsAsignados(bugs, 1));

// console.log("\n=== Pruebas One Liners ===");
// console.log(oneLiners.esSeniorOLead(equipo[0]));
// console.log(oneLiners.tituloCriticoEnMayuscula(bugs[0]));
// console.log(oneLiners.esAprobadoConRevisores(pullRequests[1]));
// console.log(oneLiners.nombrePorId(1, equipo));

// console.log("\n=== Pruebas Builders & Calculations ===");
// console.log(buildersCalculations.construirResumenDev(equipo[0], bugs, pullRequests));
// console.log(buildersCalculations.contarBugsPorEstado(bugs));
// console.log(buildersCalculations.obtenerTecnologiasUnicas(equipo));

// console.log("\n=== Pruebas Audit ===");
// console.log(audit.generarAlertasBugs(bugs, equipo));
// console.log(audit.generarAlertasPRs(pullRequests, equipo));

// console.log("\n=== Reporte Completo ===");
// buildersCalculations.imprimirReporteProyecto(proyecto);
