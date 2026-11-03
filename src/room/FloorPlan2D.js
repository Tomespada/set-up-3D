/**
 * @module src/room/FloorPlan2D
 * Editor interactivo de Planos 2D sobre HTML5 Canvas:
 * - Cuadrícula con imán configurable (5 cm / 10 cm) y asistencia ortogonal (90°).
 * - Edición directa de la longitud de cualquier muro en centímetros.
 * - Carga de plantillas rápidas (Rectangular, En L, Con retranqueo/columna).
 * - Inserción y arrastre de Puertas, Ventanas, Radiadores y Paneles de Listones sobre las paredes.
 */

export class FloorPlan2DEditor {
  constructor(canvasElement, initialRoomSchema, onApplyRoom) {
    this.canvas = canvasElement;
    this.room = structuredClone(initialRoomSchema);
    this.onApplyRoom = onApplyRoom;
    this.gridSnapCm = 5;
    this.angleSnap = true;
  }
}
