# DevTrack Platform: Enterprise Bug & PR Tracking System

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-ISC-yellow)](LICENSE)

A production-grade TypeScript workshop implementing a bug tracking and pull request management system for software development teams. This project demonstrates advanced function patterns, strict type safety, and modular architecture patterns used in enterprise applications.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Function Reference](#function-reference)
- [Type System](#type-system)
- [Scripts](#scripts)
- [Development Guidelines](#development-guidelines)

## Overview

DevTrack Platform is a functional proof-of-concept for tracking bugs and pull requests in software development workflows. The project serves as a comprehensive TypeScript workshop covering:

- Strict type annotations and interfaces
- Function declarations and expressions
- Arrow functions and one-liners
- Higher-order functions for data transformation
- Function composition for complex operations
- Input validation and error handling patterns

### Target Audience

This codebase is designed for developers transitioning from JavaScript to TypeScript who need to understand enterprise-grade patterns including strict typing, modular architecture, and functional programming concepts.

## Architecture

The system is built around five functional modules, each demonstrating specific TypeScript patterns:

### Module 1: Utilities (`utilities.ts`)
Function declarations with explicit return types and input validation.

| Function | Signature | Purpose |
|----------|-----------|---------|
| `formatoFecha` | `(fecha: [number, number, number]) => string` | Date tuple formatting with zero-padding |
| `presentarDesarrollador` | `(dev: Desarrollador) => string` | Developer profile string generation |
| `esBugUrgente` | `(bug: Bug) => boolean` | Urgency classification based on priority/state/environment |
| `clasificarPR` | `(pr: PullRequest) => string` | PR size classification by line count |

### Module 2: Search & Filter (`search-filter.ts`)
Arrow functions with block bodies for data querying.

| Function | Signature | Purpose |
|----------|-----------|---------|
| `filtrarDisponibles` | `(devs: Desarrollador[]) => Desarrollador[]` | Filter developers by availability |
| `filtrarBugsPorEstado` | `(bugs: Bug[], estado: string) => Bug[]` | Filter bugs by status |
| `obtenerBugsAsignados` | `(bugs: Bug[], idDev: number) => Bug[]` | Get bugs assigned to specific developer |
| `obtenerPRsSinRevisores` | `(prs: PullRequest[]) => PullRequest[]` | Find PRs without reviewers |
| `buscarDevsPorTecnologia` | `(devs: Desarrollador[], tech: string) => Desarrollador[]` | Search developers by technology |

### Module 3: One-Liners (`one-liners.ts`)
Concise arrow functions without block bodies.

| Function | Signature | Purpose |
|----------|-----------|---------|
| `esSeniorOLead` | `(dev: Desarrollador) => boolean` | Check seniority level |
| `tituloCriticoEnMayuscula` | `(bug: Bug) => string` | Conditional string transformation |
| `esAprobadoConRevisores` | `(pr: PullRequest) => boolean` | Compound condition check |
| `nombrePorId` | `(id: number, devs: Desarrollador[]) => string` | Safe lookup with fallback |

### Module 4: Builders & Calculations (`builders-calculations.ts`)
Complex data transformation and reporting functions.

| Function | Signature | Purpose |
|----------|-----------|---------|
| `construirResumenDev` | `(dev, bugs, prs) => ResumenDev` | Aggregate developer metrics |
| `contarBugsPorEstado` | `(bugs: Bug[]) => EstadoCounter` | Count bugs by status |
| `obtenerTecnologiasUnicas` | `(devs: Desarrollador[]) => string[]` | Extract unique tech stack |
| `imprimirReporteProyecto` | `(proyecto: Proyecto) => void` | Console report generation |

### Module 5: Audit (`audit.ts`)
Business rule validation and alert generation.

| Function | Signature | Purpose |
|----------|-----------|---------|
| `generarAlertasBugs` | `(bugs, devs) => string[]` | Critical bug alerts |
| `generarAlertasPRs` | `(prs, devs) => string[]` | PR workflow alerts |

## Installation

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

```bash
# Verify prerequisites
node --version  # v18.0.0+
npm --version   # 9.0.0+
```

### Setup

```bash
# Clone repository
git clone <repository-url>
cd Funciones_ts

# Install dependencies
npm install

# Verify installation
npm run build
```

## Quick Start

```bash
# Development mode (compile + run)
npm run dev

# Watch mode (auto-recompile on changes)
npm run watch
```

### Usage Example

```typescript
import { equipo, bugs, proyecto } from './data/constants';
import { 
  formatoFecha, 
  filtrarDisponibles, 
  esBugUrgente,
  imprimirReporteProyecto 
} from './services';

// Format date tuples
const formatted = formatoFecha([25, 12, 2025]); // "25/12/2025"

// Query available developers
const available = filtrarDisponibles(equipo);

// Check bug urgency
const urgent = esBugUrgente(bugs[0]);

// Generate full project report
imprimirReporteProyecto(proyecto);
```

## Project Structure

```
src/
├── data/
│   └── constants.ts              # Test data fixtures
├── models/
│   ├── interfaces.ts             # Domain interfaces
│   └── types.ts                  # Primitive type aliases
├── services/
│   ├── index.ts                  # Barrel exports
│   ├── utilities.ts              # Block 1: Utility functions
│   ├── search-filter.ts          # Block 2: Query functions
│   ├── one-liners.ts             # Block 3: Concise functions
│   ├── builders-calculations.ts  # Block 4: Aggregation functions
│   └── audit.ts                  # Block 5: Validation functions
├── validacion/
│   └── existencia.ts             # Type guard utilities
└── index.ts                      # Demo entry point
```

## Function Reference

### Type Definitions

```typescript
// Primitive types
type Rol = "frontend" | "backend" | "fullstack" | "QA" | "DevOps";
type Nivel = "junior" | "mid" | "senior" | "lead";
type EstadoBug = "abierto" | "en revisión" | "resuelto" | "cerrado";
type Prioridad = "baja" | "media" | "alta" | "crítica";
type EstadoPR = "borrador" | "abierto" | "aprobado" | "mergeado" | "rechazado";

// Core interfaces
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
```

## Type System

The project enforces strict typing:

- `strict: true` enabled in tsconfig
- No `any` types used
- Explicit return types on all functions
- Readonly modifiers for immutable properties
- Literal unions for enumerated values

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run start` | Execute compiled code |
| `npm run dev` | Compile and execute in sequence |
| `npm run watch` | Watch mode compilation |

## Development Guidelines

### Code Standards

1. **Explicit Types**: Always declare parameter and return types
2. **Function Style**: Match function type to module (declarations, arrows, one-liners)
3. **Input Validation**: Use `validarExiste` guard for nullable inputs
4. **Immutability**: Avoid mutating input arrays; use `filter`, `map`, etc.
5. **Naming**: Use camelCase for functions; descriptive verb prefixes

### Example Patterns

```typescript
// Block 1: Function declaration with validation
export function formatoFecha(fecha: [number, number, number]): string {
  if (!validarExiste(fecha)) {
    return "Fecha no existe";
  }
  const [dia, mes, año] = fecha;
  const diaFormateado = dia < 10 ? `0${dia}` : dia;
  const mesFormateado = mes < 10 ? `0${mes}` : mes;
  return `${diaFormateado}/${mesFormateado}/${año}`;
}

// Block 2: Arrow function with block
export const filtrarDisponibles = (desarrolladores: Desarrollador[]): Desarrollador[] => {
  if (!validarExiste(desarrolladores)) {
    return [];
  }
  return desarrolladores.filter(dev => dev.disponible);
};

// Block 3: One-liner arrow
export const esSeniorOLead = (dev: Desarrollador): boolean => 
  dev.nivel === 'senior' || dev.nivel === 'lead';
```

## Test Data

The project includes realistic test fixtures:

- **4 Developers**: Mixed roles (fullstack, backend, frontend, QA) and seniority levels
- **5 Bugs**: Various priorities (crítica, alta, baja) and states
- **4 Pull Requests**: Different stages of review workflow

## License

ISC License - See LICENSE file for details.

---

**Enterprise TypeScript Workshop** | Strict Typing | Functional Patterns | Production-Ready Architecture
