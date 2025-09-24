// Script de diagnóstico para LN Consultoría
// Copia y pega esto en la consola del navegador (F12 → Console)

console.log('🔍 DIAGNÓSTICO LN CONSULTORÍA');
console.log('=============================');

// 1. Verificar si React está cargando
console.log('1️⃣ Verificando React...');
if (typeof React !== 'undefined') {
  console.log('✅ React está cargado');
} else {
  console.log('❌ React no está cargado');
}

// 2. Verificar si el componente App se está renderizando
console.log('2️⃣ Verificando elemento root...');
const rootElement = document.getElementById('root');
if (rootElement) {
  console.log('✅ Elemento root encontrado');
  console.log('Contenido del root:', rootElement.innerHTML.substring(0, 100) + '...');
} else {
  console.log('❌ Elemento root no encontrado');
}

// 3. Verificar si Tailwind CSS está funcionando
console.log('3️⃣ Verificando Tailwind CSS...');
const bodyElement = document.body;
if (bodyElement) {
  const computedStyle = window.getComputedStyle(bodyElement);
  console.log('✅ Body encontrado');
  console.log('Background color:', computedStyle.backgroundColor);
  console.log('Color del texto:', computedStyle.color);
} else {
  console.log('❌ Body no encontrado');
}

// 4. Verificar si hay errores de JavaScript
console.log('4️⃣ Verificando errores...');
if (window.console && console.error) {
  console.log('✅ Consola funcionando');
  console.log('💡 Si ves errores rojos arriba, esos son los problemas');
} else {
  console.log('❌ Consola no disponible');
}

// 5. Verificar conectividad de red
console.log('5️⃣ Verificando recursos...');
const scripts = document.querySelectorAll('script');
console.log(`📊 Scripts cargados: ${scripts.length}`);

const links = document.querySelectorAll('link[rel="stylesheet"]');
console.log(`🎨 Hojas de estilo cargadas: ${links.length}`);

// 6. Verificar imágenes
console.log('6️⃣ Verificando imágenes...');
const images = document.querySelectorAll('img');
console.log(`🖼️ Imágenes encontradas: ${images.length}`);

images.forEach((img, index) => {
  console.log(`Imagen ${index + 1}: ${img.src}`);
  console.log(`  - Alt: ${img.alt}`);
  console.log(`  - Cargada: ${img.complete}`);
  console.log(`  - Error: ${img.naturalWidth === 0 ? '❌' : '✅'}`);
});

// 7. Verificar botones y enlaces
console.log('7️⃣ Verificando interactividad...');
const buttons = document.querySelectorAll('button, a');
console.log(`🔗 Elementos interactivos: ${buttons.length}`);

console.log('=============================');
console.log('✅ DIAGNÓSTICO COMPLETADO');
console.log('');
console.log('💡 INSTRUCCIONES:');
console.log('1. Si ves errores rojos arriba, esos son los problemas');
console.log('2. Si React no está cargado, hay un problema con los scripts');
console.log('3. Si Tailwind no funciona, los colores serán incorrectos');
console.log('4. Si las imágenes no cargan, revisa las rutas');
console.log('');
console.log('🔄 Para recargar completamente:');
console.log('1. Presiona Ctrl+F5 (Windows) o Cmd+Shift+R (Mac)');
console.log('2. O abre una ventana incógnita/privada');
console.log('3. Ve a: https://iamjosealonso.github.io/LNconsultoria.github.io/');
