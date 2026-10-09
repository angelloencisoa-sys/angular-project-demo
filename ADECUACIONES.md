# Adecuaciones al proyecto de clase

Se conserva el componente `demo-pipes` con sus cinco ejemplos y todos los pipes originales.

## Funcionalidad añadida: probador interactivo de textos

La sección **02 / ADECUACIÓN AÑADIDA** tiene borde, título y distintivo rojos para identificar el aporte.

- Permite escribir o pegar un texto y ver el truncado en tiempo real.
- Incluye un límite ajustable entre 10 y 200 caracteres.
- Permite respetar palabras completas y elegir la terminación.
- Muestra el número de palabras y caracteres del texto y los caracteres del resultado.
- Incluye botones para copiar el resultado y restablecer el ejemplo.
- Reutiliza el pipe `truncate` de clase. En el componente nuevo se controlan los textos cortos y las palabras largas sin modificar ese pipe.
- La copia depende del permiso del navegador y de usar localhost o HTTPS. Si no está disponible, se muestra un mensaje para copiar manualmente.

## Estilos añadidos

Cabecera azul, fondo claro, contenedores, tipografía y controles con estilos. La distribución se adapta a pantallas pequeñas.

## Archivos añadidos

- `src/app/text-playground/`: componente, plantilla, estilos y pruebas de la nueva funcionalidad.
- `src/project-theme.css`: estilos generales del proyecto y de los ejemplos existentes.
- `ADECUACIONES.md`: explicación de las mejoras y cómo comprobarlas.

## Cambios mínimos en archivos existentes

- `src/app/app.ts`: importa el nuevo componente.
- `src/app/app.html`: añade la cabecera y el probador, conservando el componente de clase.
- `src/styles.css`: importa el archivo nuevo de estilos.

## Ejecutar el proyecto entregado

1. Descomprimir el ZIP.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar `npm ci` para instalar las dependencias del archivo de bloqueo.
4. Ejecutar `npm start` y abrir `http://localhost:4200`.

Para comprobar la adecuación, escribir un texto, mover el límite, cambiar la terminación, activar/desactivar palabras completas y probar Copiar resultado y Restablecer.

El ZIP incluye el código y el archivo de bloqueo. No incluye `node_modules`, `.angular`, `.git` ni archivos compilados.

## Validación realizada

- Compilación de producción completada correctamente.
- 12 pruebas automáticas aprobadas, incluidas las pruebas originales y las del probador nuevo.
- Comprobación en navegador de escritura, límite, terminación, copia real al portapapeles y restablecimiento.
- Comprobación de distribución móvil sin desbordamiento horizontal.
- `vista-previa.png` incluye una captura del proyecto actualizado.

La compilación mantiene dos avisos por importaciones originales sin usar (`RouterOutlet` y `ExponentialPipe`); no impiden ejecutar el proyecto.
