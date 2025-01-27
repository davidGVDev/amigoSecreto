# Amigo Secreto Challenge

Este proyecto implementa una aplicación sencilla en JavaScript, HTML y CSS para gestionar un "amigo secreto". Permite a los usuarios ingresar nombres de participantes, visualizar una lista de amigos y sortear aleatoriamente uno de ellos como el "amigo secreto".

---

## Estructura del Proyecto

### Archivos principales:
- **`index.html`**: Contiene la estructura HTML de la aplicación.
- **`app.js`**: Contiene toda la lógica del funcionamiento del programa en JavaScript.
- **`style.css`** (opcional, no mostrado en este caso): Diseño y estilos visuales.

---

## Funcionalidades

1. **Agregar Amigos**:
   - Los usuarios pueden escribir el nombre de un amigo en el campo de texto.
   - Al hacer clic en el botón **"Añadir"**, el nombre se añade a una lista visible en pantalla.
   - Si el campo de texto está vacío, aparece una alerta solicitando un nombre.

2. **Mostrar Lista de Amigos**:
   - Cada vez que se añade un nombre, la lista de amigos se actualiza dinámicamente en el navegador.

3. **Sorteo de Amigo Secreto**:
   - Al hacer clic en el botón **"Sortear amigo"**, se selecciona un nombre aleatorio de la lista.
   - La lista de amigos desaparece para evitar confusión y el resultado del sorteo se muestra en un elemento de texto.
   - Si no hay nombres en la lista, se muestra una alerta indicando que no hay participantes para sortear.

---

## Detalle del Código

### `index.html`

- Contiene:
  - Un campo de entrada de texto para agregar nombres.
  - Botón **"Añadir"** que llama a la función `agregarAmigo()` definida en `app.js`.
  - Un botón **"Sortear amigo"** con la función `sortearAmigo()`.
  - Dos listas (`ul`):
    - `id="listaAmigos"`: Muestra los nombres agregados.
    - `id="resultado"`: Muestra el nombre sorteado.

### `app.js`

#### Variables
- **`amigos`**: Array que almacena los nombres de los amigos.

#### Funciones

1. **`agregarAmigo`**:
   - Obtiene el nombre ingresado en el campo de texto.
   - Verifica que el campo no esté vacío.
   - Agrega el nombre al array `amigos` y actualiza la lista visible en el HTML.
   - Limpia el campo de texto después de agregar un nombre.

2. **`sortearAmigo`**:
   - Oculta la lista de amigos cambiando su estilo (`display: none`).
   - Verifica si hay al menos un nombre en el array `amigos`.
   - Selecciona un nombre aleatorio del array usando un índice generado con `Math.random()`.
   - Muestra el nombre sorteado en el elemento `id="resultado"`.
   - Si no hay nombres, muestra una alerta.

---

## Tecnologías Utilizadas

- **HTML**: Para la estructura del contenido.
- **JavaScript**: Para la lógica interactiva.
- **CSS** (opcional): Para estilización del diseño visual.

---

## Mejoras Futuras
- Agregar validación para evitar nombres duplicados.
- Permitir editar o eliminar nombres de la lista.
- Estilizar la aplicación con CSS para mejorar la experiencia del usuario.
- Agregar soporte para guardar la lista de amigos en almacenamiento local (localStorage).

---

## Uso
1. Abre el archivo `index.html` en un navegador.
2. Ingresa nombres en el campo de texto y haz clic en **"Añadir"**.
3. Cuando hayas ingresado todos los nombres, haz clic en **"Sortear amigo"** para seleccionar aleatoriamente a uno de los participantes.

---

¡Diviértete sorteando tu amigo secreto! 🎁

