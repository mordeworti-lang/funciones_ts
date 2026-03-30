# 🎯 Guía Paso a Paso - Taller de Funciones en TypeScript

## 📖 ¿Qué es el Proyecto?

Estás trabajando como desarrollador en una **startup llamada DevTrack Platform** que construye una herramienta de seguimiento de bugs y pull requests para equipos de software. 

### 🎭 Contexto Real:
- **Eres parte del equipo de desarrollo**
- **El líder técnico ya definió las interfaces y datos**
- **Tu misión**: Implementar toda la lógica del sistema
- **No hay UI**: Solo trabajas con datos, tipos y consola

### 🏗️ Arquitectura del Sistema:

```
DevTrack Platform
├── Equipo de Desarrolladores (4 personas)
├── Sistema de Bugs (5 bugs de ejemplo)
├── Sistema de Pull Requests (4 PRs de ejemplo)
└── Funcionalidades que tú debes construir
```

---

## 🚀 Paso 1: Entender la Estructura (5 minutos)

### 📁 Explora los Archivos Clave:

1. **`src/types/interfaces.ts`** - Todos los tipos de datos
   - `Desarrollador`: información del equipo
   - `Bug`: reportes de errores
   - `PullRequest`: cambios de código
   - `Proyecto`: contenedor principal

2. **`src/data/constants.ts`** - Datos de prueba
   - `equipo`: 4 desarrolladores con sus datos
   - `bugs`: 5 bugs con diferentes estados y prioridades
   - `pullRequests`: 4 PRs en distintos estados
   - `proyecto`: el proyecto completo

3. **`src/index.ts`** - Punto de entrada
   - Importa todos los datos
   - Aquí probarás tus funciones

---

## 🎯 Paso 2: Entender los Datos (10 minutos)

### 👥 El Equipo:
- **Valentina Torres** - Senior Fullstack (disponible)
- **Sebastián Molina** - Mid Backend (no disponible)
- **Camila Ríos** - Junior Frontend (disponible)
- **Andrés Peña** - Lead QA (disponible)

### 🐛 Los Bugs:
- **Críticos**: Login falla en Safari, Memory leak en dashboard
- **Altos**: Timeout en endpoint, paginación incorrecta
- **Bajos**: Typo en mensaje

### 🔄 Los Pull Requests:
- **Abiertos**: Autenticación Google OAuth
- **Aprobados**: Fix paginación usuarios
- **Borrador**: Optimización de queries
- **Rechazado**: Actualización de dependencias

---

## ⚡ Paso 3: Estrategia de Implementación (Recomendado)

### 🏁 Por Dónde Empezar:

#### 🥇 **Nivel 1: Bloque 1 - Functions Básicas** (20 minutos)
**Archivo**: `src/functions/utilities.ts`

1. **`formatoFecha()`** - La más fácil
   ```typescript
   // [25, 12, 2025] -> "25/12/2025"
   ```

2. **`presentarDesarrollador()`** - Formateo de texto
   ```typescript
   // "SENIOR - Valentina Torres (fullstack) - ✅ Disponible"
   ```

3. **`esBugUrgente()`** - Lógica booleana simple
   ```typescript
   // Verifica prioridad + estado + ambiente
   ```

4. **`clasificarPR()`** - Cálculo y clasificación
   ```typescript
   // Pequeño/Mediano/Grande según líneas
   ```

#### 🥈 **Nivel 2: Bloque 2 - Búsqueda y Filtrado** (20 minutos)
**Archivo**: `src/functions/search-filter.ts`

1. **`filtrarDisponibles()`** - Filtro simple
2. **`filtrarBugsPorEstado()`** - Filtro con parámetro
3. **`obtenerBugsAsignados()`** - Filtro por ID
4. **`obtenerPRsSinRevisores()`** - Filtro de array vacío
5. **`buscarDevsPorTecnologia()`** - Búsqueda en array de arrays

#### 🥉 **Nivel 3: Bloque 3 - One Liners** (5 minutos)
**Archivo**: `src/functions/one-liners.ts`

✅ **YA ESTÁN IMPLEMENTADOS** - Solo estúdialos como ejemplo

#### 🏆 **Nivel 4: Bloque 4 - Construcción** (25 minutos)
**Archivo**: `src/functions/builders-calculations.ts`

1. **`construirResumenDev()`** - Objeto complejo
2. **`contarBugsPorEstado()`** - Contadores múltiples
3. **`obtenerTecnologiasUnicas()`** - Arrays y Sets
4. **`imprimirReporteProyecto()`** - Consola organizada

#### 🎖️ **Nivel 5: Bloque 5 - Auditoría** (20 minutos)
**Archivo**: `src/functions/audit.ts`

1. **`generarAlertasBugs()`** - Lógica de negocio compleja
2. **`generarAlertasPRs()`** - Análisis de PRs

---

## 🛠️ Paso 4: Flujo de Trabajo Recomendado

### 🔄 Ciclo de Desarrollo:

1. **Abrir el archivo** del bloque que vas a trabajar
2. **Leer los comentarios** de cada función
3. **Implementar una función** a la vez
4. **Probar inmediatamente** en `index.ts`
5. **Descomentar la prueba** correspondiente
6. **Ejecutar `npm run dev`** para verificar
7. **Repetir** con la siguiente función

### 🧪 Ejemplo de Prueba:

```typescript
// En index.ts, descomenta:
import * as utilities from './functions/utilities';

console.log("\n=== Pruebas Utilities ===");
console.log(utilities.formatoFecha([25, 12, 2025]));
console.log(utilities.presentarDesarrollador(equipo[0]));
```

---

## 🎯 Paso 5: Consejos por Bloque

### 🔧 **Bloque 1 - Utilities**:
- Usa `template literals` para formatear strings
- Usa operadores `&&` y `||` para condiciones
- Usa `toUpperCase()` para mayúsculas

### 🔍 **Bloque 2 - Search/Filter**:
- Usa `array.filter()` para todo
- Usa `array.includes()` para buscar en stacks
- Usa `array.length === 0` para arrays vacíos

### 🏗️ **Bloque 4 - Builders**:
- Usa `array.flatMap()` para aplanar stacks
- Usa `new Set()` para eliminar duplicados
- Usa `console.log()` con formato claro

### 🚨 **Bloque 5 - Audit**:
- Combina múltiples filtros
- Usa `array.push()` para agregar alertas
- Piensa en todos los casos límite

---

## ⏰ Paso 6: Gestión del Tiempo (90 minutos)

### 📅 Cronograma Sugerido:
- **0-5 min**: Lectura y entender estructura
- **5-25 min**: Bloque 1 (Utilities)
- **25-45 min**: Bloque 2 (Search/Filter)
- **45-50 min**: Revisar Bloque 3 (One-liners)
- **50-75 min**: Bloque 4 (Builders)
- **75-90 min**: Bloque 5 (Audit) y pruebas finales

### ⚠️ Puntos de Control:
- **Minuto 25**: Deberías tener 4 funciones básicas
- **Minuto 45**: Deberías tener 9 funciones listas
- **Minuto 75**: Deberías tener 17 funciones listas
- **Minuto 90**: ¡Proyecto completo!

---

## 🎯 Paso 7: Validación Final

### ✅ Checklist de Completitud:

- [ ] 4 funciones utilities implementadas
- [ ] 5 funciones search/filter implementadas
- [ ] 4 funciones one-liners (ya están)
- [ ] 4 funciones builders implementadas
- [ ] 2 funciones audit implementadas
- [ ] Todas las pruebas en index.ts funcionan
- [ ] `npm run dev` ejecuta sin errores
- [ ] Reporte final se imprime correctamente

---

## 🚀 ¡MANOS A LA OBRA!

### 🎯 Tu Primera Tarea:
1. Abre `src/functions/utilities.ts`
2. Implementa `formatoFecha()`
3. Ve a `src/index.ts` y descomenta la prueba
4. Ejecuta `npm run dev`
5. ¡Celebra tu primera función funcionando! 🎉

**Recuerda**: Los comentarios en cada archivo son tu guía detallada. Sigue los pasos indicados y no tendrás problemas.

**¡Mucha suerte! Tienes 90 minutos para convertirte en un experto en funciones TypeScript. 🚀**
