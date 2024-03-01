function expandCard(card) {
    card.classList.toggle('expanded');
  }

  const text = "¡Hola! soy Gastón Macias. ¡Bienvenido!.";
  let index = 0;
  
  // Verificar si hay un estado guardado en el almacenamiento local
  const savedIndex = localStorage.getItem('typedTextIndex');
  if (savedIndex) {
    index = parseInt(savedIndex);
  }
  
  function type() {
    document.getElementById('typed-text').textContent = text.slice(0, index);
  
    index++;
  
    if (index > text.length) {
      index = text.length; // Evitar que index supere la longitud del texto
    }
  
    // Guardar el estado actual en el almacenamiento local
    localStorage.setItem('typedTextIndex', index.toString());
  
    // Llamada recursiva para continuar el tipeo
    if (index <= text.length) {
      setTimeout(type, 100); // Velocidad de tipeo
    }
  }
  
  type(); // Iniciar el efecto de tipeo
  