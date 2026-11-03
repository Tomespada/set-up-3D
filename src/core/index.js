/**
 * @module src/core
 * Esqueleto del motor principal Three.js:
 * - Inicialización de WebGLRenderer, EffectComposer (UnrealBloomPass) y CSS2DRenderer.
 * - Sistema de iluminación física (Sol exterior, ventana, tira LED RGB perimetral y luz de monitores).
 * - Presets de cámara y ocultación automática de muros según la normal exterior de cada pared.
 */

export const SCALE_CM = 1; // 1 unidad Three.js = 1 cm real
