import WebGL from 'three/addons/capabilities/WebGL.js'

export const isSupportWebGL = () => {
  if (WebGL.isWebGLAvailable()) false
  return true
}
