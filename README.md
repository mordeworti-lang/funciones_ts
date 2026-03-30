# Taller — Funciones en TypeScript

## ✅ Espacio de Trabajo Organizado

### 📁 Estructura Final de Archivos

```
src/
├── index.ts          # Archivo principal (punto de entrada)
├── interfaces.ts     # Todos los tipos e interfaces
├── constants.ts     # Datos de prueba (equipo, bugs, PRs, proyecto)
├── utils.ts         # Funciones auxiliares reutilizables
├── bloque1.ts       # Funciones de utilidad (function declarations)
├── bloque2.ts       # Búsqueda y filtrado (arrow functions con llaves)
├── bloque3.ts       # Arrow functions de una línea
├── bloque4.ts       # Construcción y cálculo
└── bloque5.ts       # Auditoría
```

### 🎯 Organización por Responsabilidad

- **`interfaces.ts`** - Tipos y contratos del sistema
- **`constants.ts`** - Datos de prueba y configuración
- **`utils.ts`** - Funciones auxiliares reutilizables
- **`bloque*.ts`** - Implementaciones específicas del taller

### ⚙️ Configuración Lista

- TypeScript configurado para CommonJS
- Scripts configurados (`build`, `start`, `dev`)
- Todos los imports actualizados
- Compilación sin errores

### 🚀 Para Empezar

```bash
npm run dev
```

### 📋 Tareas por Implementar

#### Bloque 1 — Funciones de utilidad (function declarations)
- `formatoFecha()` - Formatear fecha de tupla a string
- `presentarDesarrollador()` - Presentación de desarrollador
- `esBugUrgente()` - Evaluar urgencia de bug
- `clasificarPR()` - Clificar tamaño de Pull Request

#### Bloque 2 — Búsqueda y filtrado (arrow functions con llaves)
- `filtrarDisponibles()` - Filtrar desarrolladores disponibles
- `filtrarBugsPorEstado()` - Filtrar bugs por estado
- `obtenerBugsAsignados()` - Bugs asignados a desarrollador
- `obtenerPRsSinRevisores()` - Pull Requests sin revisores
- `buscarDevsPorTecnologia()` - Buscar por tecnología

#### Bloque 3 — Arrow functions de una línea
- `esSeniorOLead()` - Verificar si es senior o lead
- `tituloCriticoEnMayuscula()` - Título en mayúsculas si es crítico
- `esAprobadoConRevisores()` - PR aprobado con revisores
- `nombrePorId()` - Nombre de desarrollador por ID

#### Bloque 4 — Construcción y cálculo
- `construirResumenDev()` - Construir resumen de desarrollador
- `contarBugsPorEstado()` - Contar bugs por estado
- `obtenerTecnologiasUnicas()` - Tecnologías únicas del equipo
- `imprimirReporteProyecto()` - Reporte completo del proyecto

#### Bloque 5 — Auditoría
- `generarAlertasBugs()` - Alertas sobre bugs
- `generarAlertasPRs()` - Alertas sobre Pull Requests

### 🔗 Datos Disponibles

- `equipo` - Array de 4 desarrolladores
- `bugs` - Array de 5 bugs
- `pullRequests` - Array de 4 pull requests
- `proyecto` - Objeto completo con todos los datos

### 📝 Restricciones

- ❌ No usar `any`
- ✅ Todo debe estar tipado
- ✅ Respetar tipo de función por bloque
- ✅ Reutilizar lógica existente
- ✅ Proyecto debe compilar y ejecutar sin errores

**¡Todo organizado y listo para empezar a codificar! 🚀**
