/**
 * @module src/state/ShareAndExport
 * Sistema de persistencia, enlaces compartibles y exportación 3D:
 * - Codificación/decodificación del estado de la habitación en la URL (`#setup=...`) para compartir con un clic.
 * - Exportación e importación de archivos de proyecto `.JSON`.
 * - Exportación de modelos 3D o escena completa en formato estándar `.GLB` mediante `GLTFExporter`.
 */

export function encodeSetupToUrlHash(stateObj) {
  const json = JSON.stringify(stateObj);
  const encoded = btoa(encodeURIComponent(json));
  return `#setup=${encoded}`;
}

export function decodeSetupFromUrlHash(hash = window.location.hash) {
  if (!hash || !hash.startsWith('#setup=')) return null;
  try {
    const raw = hash.slice('#setup='.length);
    return JSON.parse(decodeURIComponent(atob(raw)));
  } catch (_) {
    return null;
  }
}
