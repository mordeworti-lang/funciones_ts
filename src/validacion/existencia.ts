export function validarExiste<T>(obj: T | null | undefined): obj is T {
  return obj !== null && obj !== undefined;
}