// Interfaces y Tipos del Proyecto

type Rol = "frontend" | "backend" | "fullstack" | "QA" | "DevOps";
type Nivel = "junior" | "mid" | "senior" | "lead";
type EstadoBug = "abierto" | "en revisión" | "resuelto" | "cerrado";
type Prioridad = "baja" | "media" | "alta" | "crítica";
type EstadoPR = "borrador" | "abierto" | "aprobado" | "mergeado" | "rechazado";

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

export type { Rol, Nivel, EstadoBug, Prioridad, EstadoPR };
export type { Desarrollador, Bug, PullRequest, Proyecto, ResumenDev };
