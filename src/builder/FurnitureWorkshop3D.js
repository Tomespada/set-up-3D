/**
 * @module src/builder/FurnitureWorkshop3D
 * Taller de Muebles 3D (estilo SketchUp por bloques + extrusión Push/Pull):
 * - Creación de muebles a medida ensamblando tableros, patas, cajones, divisiones y cilindros.
 * - Ajuste de cotas exactas (Ancho, Alto, Fondo, Posición X/Y/Z en cm) y asignación de materiales.
 * - Guardado directo en el catálogo del usuario y exportación individual a .GLB o .JSON.
 */

export class FurnitureWorkshop3D {
  constructor() {
    this.parts = [];
  }
}
