// Entry point - TypeScript Functions Workshop
// Demonstrates all implemented functionality

import { equipo, bugs, pullRequests, proyecto } from './data/constants';
import * as utilities from './services/utilities';
import * as searchFilter from './services/search-filter';
import * as oneLiners from './services/one-liners';
import * as builders from './services/builders-calculations';
import * as audit from './services/audit';

console.dir("================================================================", { depth: null });
console.dir("    TYPESCRIPT FUNCTIONS WORKSHOP - DEVTRACK PLATFORM         ", { depth: null });
console.dir("================================================================", { depth: null });


console.dir("================================================================", { depth: null });
console.dir(" BLOCK 1 - UTILITY FUNCTIONS", { depth: null });
console.dir("================================================================", { depth: null });

console.dir(" 1.1 formatoFecha():");
console.log(`   Formatted date: ${utilities.formatoFecha([25, 12, 2025])}\n`);

console.dir(" 1.2 presentarDesarrollador():");
equipo.forEach(dev => console.log(utilities.presentarDesarrollador(dev)));
console.log();

console.dir(" 1.3 esBugUrgente():");
console.log("   Critical production bug:", utilities.esBugUrgente(bugs[0]));
console.log("   Resolved low priority bug:", utilities.esBugUrgente(bugs[3]));
console.log();

console.dir(" 1.4 clasificarPR():");
pullRequests.forEach(pr => {
  console.log(`   PR "${pr.titulo}" - Size: ${utilities.clasificarPR(pr)}`);
});
console.log();


console.dir("================================================================", { depth: null });
console.dir(" BLOCK 2 - SEARCH & FILTER", { depth: null });
console.dir("================================================================", { depth: null });

console.dir(" 2.1 filtrarDisponibles():");
const disponibles = searchFilter.filtrarDisponibles(equipo);
console.log(`   Available developers: ${disponibles.map(d => d.nombre).join(", ")}\n`);

console.dir(" 2.2 filtrarBugsPorEstado('abierto'):");
const bugsAbiertos = searchFilter.filtrarBugsPorEstado(bugs, 'abierto');
console.log(`   Open bugs: ${bugsAbiertos.length}`);
bugsAbiertos.forEach(bug => console.log(`   - ${bug.titulo}`));
console.log();

console.dir(" 2.3 obtenerBugsAsignados(dev.id=1 - Valentina):");
const bugsValentina = searchFilter.obtenerBugsAsignados(bugs, 1);
console.log(`   Bugs assigned to Valentina: ${bugsValentina.length}`);
bugsValentina.forEach(bug => console.log(`   - ${bug.titulo}`));
console.log();

console.dir(" 2.4 obtenerPRsSinRevisores():");
const prsSinRevisores = searchFilter.obtenerPRsSinRevisores(pullRequests);
console.log(`   PRs without reviewers: ${prsSinRevisores.length}`);
prsSinRevisores.forEach(pr => console.log(`   - ${pr.titulo}`));
console.log();

console.dir(" 2.5 buscarDevsPorTecnologia('TypeScript'):");
const devsTypeScript = searchFilter.buscarDevsPorTecnologia(equipo, 'TypeScript');
console.log(`   Devs with TypeScript: ${devsTypeScript.map(d => d.nombre).join(", ")}\n`);


console.dir("================================================================", { depth: null });
console.dir(" BLOCK 3 - ONE-LINER ARROW FUNCTIONS", { depth: null });
console.dir("================================================================", { depth: null });

console.dir(" 3.1 esSeniorOLead():");
equipo.forEach(dev => {
  console.log(`   ${dev.nombre}: ${oneLiners.esSeniorOLead(dev) ? 'Yes' : 'No'}`);
});
console.log();

console.dir(" 3.2 tituloCriticoEnMayuscula():");
bugs.forEach(bug => {
  const titulo = oneLiners.tituloCriticoEnMayuscula(bug);
  console.log(`   ${titulo}`);
});
console.log();

console.dir(" 3.3 esAprobadoConRevisores():");
pullRequests.forEach(pr => {
  const status = oneLiners.esAprobadoConRevisores(pr) ? 'Yes' : 'No';
  console.log(`   PR "${pr.titulo}": ${status}`);
});
console.log();

console.dir(" 3.4 nombrePorId():");
[1, 2, 3, 4, 99].forEach(id => {
  console.log(`   ID ${id}: ${oneLiners.nombrePorId(id, equipo)}`);
});
console.log();


console.dir("================================================================", { depth: null });
console.dir(" BLOCK 4 - BUILDERS & CALCULATIONS", { depth: null });
console.dir("================================================================", { depth: null });

console.dir(" 4.1 construirResumenDev() - Developer summary:");
equipo.forEach(dev => {
  const resumen = builders.construirResumenDev(dev, bugs, pullRequests);
  console.log(`\n    ${resumen.nombre} (${resumen.rol} - ${resumen.nivel})`);
  console.log(`      Bugs assigned: ${resumen.bugsAsignados}`);
  console.log(`      Bugs resolved: ${resumen.bugsResueltos}`);
  console.log(`      PRs open: ${resumen.prsAbiertos}`);
  console.log(`      Available: ${resumen.disponible ? 'Yes' : 'No'}`);
});
console.log();

console.dir(" 4.2 contarBugsPorEstado():");
const conteo = builders.contarBugsPorEstado(bugs);
console.log(`      Bug counts:`);
console.log(`      Open: ${conteo.abiertos}`);
console.log(`      In review: ${conteo.enRevision}`);
console.log(`      Resolved: ${conteo.resueltos}`);
console.log(`      Closed: ${conteo.cerrados}\n`);

console.dir(" 4.3 obtenerTecnologiasUnicas():");
const techs = builders.obtenerTecnologiasUnicas(equipo);
console.log(`     Team technologies: ${techs.join(", ")}\n`);

console.dir(" 4.4 imprimirReporteProyecto():");
builders.imprimirReporteProyecto(proyecto);
console.log();


console.dir("================================================================", { depth: null });
console.dir(" BLOCK 5 - AUDIT (System Alerts)");
console.dir("================================================================\n");

console.dir(" 5.1 generarAlertasBugs():");
const alertasBugs = audit.generarAlertasBugs(bugs, equipo);
if (alertasBugs.length > 0) {
  console.log(`     Bug alerts found (${alertasBugs.length}):`);
  alertasBugs.forEach(alerta => console.log(`       ${alerta}`));
} else {
  console.log("    No bug alerts");
}
console.log();

console.dir(" 5.2 generarAlertasPRs():");
const alertasPRs = audit.generarAlertasPRs(pullRequests, equipo);
if (alertasPRs.length > 0) {
  console.log(`     PR alerts found (${alertasPRs.length}):`);
  alertasPRs.forEach(alerta => console.log(`       ${alerta}`));
} else {
  console.log("    No PR alerts");
}
console.log();


console.dir("================================================================", { depth: null });
console.dir(" WORKSHOP SUMMARY");
console.dir("================================================================\n");
console.dir(" Block 1 - Utility functions: 4/4 implemented");
console.log("   • formatoFecha()");
console.log("   • presentarDesarrollador()");
console.log("   • esBugUrgente()");
console.log("   • clasificarPR()\n");

console.dir(" Block 2 - Search & filter: 5/5 implemented");
console.log("   • filtrarDisponibles()");
console.log("   • filtrarBugsPorEstado()");
console.log("   • obtenerBugsAsignados()");
console.log("   • obtenerPRsSinRevisores()");
console.log("   • buscarDevsPorTecnologia()\n");

console.dir(" Block 3 - One-liner arrow functions: 4/4 implemented");
console.log("   • esSeniorOLead()");
console.log("   • tituloCriticoEnMayuscula()");
console.log("   • esAprobadoConRevisores()");
console.log("   • nombrePorId()\n");

console.dir(" Block 4 - Builders & calculations: 4/4 implemented");
console.log("   • construirResumenDev()");
console.log("   • contarBugsPorEstado()");
console.log("   • obtenerTecnologiasUnicas()");
console.log("   • imprimirReporteProyecto()\n");

console.dir(" Block 5 - Audit: 2/2 implemented");
console.log("   • generarAlertasBugs()");
console.log("   • generarAlertasPRs()\n");

console.dir("================================================================");
console.dir("     ALL WORKSHOP FUNCTIONS ARE OPERATIONAL");
console.dir("================================================================\n");
