// Interfaces y Tipos del Proyecto

import { Rol, Nivel, EstadoBug, Prioridad, EstadoPR } from './types';

interface Desarrollador {
  readonly id: number;
  nombre: string;
  rol: Rol;
  nivel: Nivel;
  stack: string[];
  disponible: boolean;
  email: string;
}

interface Bug {
  readonly id: number;
  titulo: string;
  descripcion: string;
  prioridad: Prioridad;
  estado: EstadoBug;
  idAsignado: number;
  fechaReporte: [number, number, number];
  reproducible: boolean;
  ambiente: "desarrollo" | "staging" | "producción";
}

interface PullRequest {
  readonly id: number;
  titulo: string;
  rama: string;
  estado: EstadoPR;
  idAutor: number;
  lineasAgregadas: number;
  lineasEliminadas: number;
  archivosModificados: number;
  revisores: number[];
}

interface Proyecto {
  readonly id: number;
  nombre: string;
  repositorio: string;
  stack: string[];
  bugs: Bug[];
  pullRequests: PullRequest[];
}

interface ResumenDev {
  nombre: string;
  rol: Rol;
  nivel: Nivel;
  bugsAsignados: number;
  bugsResueltos: number;
  prsAbiertos: number;
  disponible: boolean;
}


export type { Desarrollador, Bug, PullRequest, Proyecto, ResumenDev };
