/**
 * @module src/room/RoomBuilder3D
 * Generador paramétrico de habitaciones 3D a partir del esquema 2D (`RoomSchema`):
 * - Extrusión de suelo de parquet y techo a partir del polígono `vertices`.
 * - Construcción de muros con recorte automático de huecos (`window`, `door`).
 * - Generación de rodapiés, pilares de esquina sincronizados, radiadores y paneles de listones (`woodSlats`).
 * - Tira LED RGB continua a lo largo de todo el perímetro del polígono.
 */

export class RoomBuilder3D {
  constructor(scene, materials) {
    this.scene = scene;
    this.materials = materials;
  }
}
