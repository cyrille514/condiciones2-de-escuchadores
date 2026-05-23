//  Escuchador para el campo Nombre
document.getElementById("nombre").addEventListener("input", () => {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = "";
    resultadoDiv.className = "hidden"; 
});

//  Escuchador para el campo Años 
document.getElementById("anios").addEventListener("input", () => {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = "";
    resultadoDiv.className = "hidden";
});

// 3. Escuchador maestro para el envío del formulario 
document.getElementById("formExperiencia").addEventListener("submit", (evento) => {
    // Frenar el reinicio automático de la página web
    evento.preventDefault();

    // Captura directa de los nodos del DOM
    const nombreInput = document.getElementById("nombre");
    const aniosInput = document.getElementById("anios");
    const resultadoDiv = document.getElementById("resultado");

    // Extracción de los valores limpios
    const nombre = nombreInput.value.trim();
    const anios = parseInt(aniosInput.value, 10);

    // Variable directa para alojar el resultado del cálculo
    let nivel = "";

    // Lógica condicional integrada directamente en el flujo del escuchador
    if (anios < 2) {
        nivel = "Nivel principiante";
    } else if (anios >= 2 && anios <= 4) {
        nivel = "Nivel intermedio";
    } else if (anios > 4 && anios <= 7) {
        nivel = "Nivel avanzado";
    } else if (anios > 7 && anios <= 10) {
        nivel = "Nivel experto";
    } else {
        nivel = "Nivel Gurú";
    }

    // Inyección y renderizado directo sobre la interfaz con clases de Tailwind CSS
    resultadoDiv.innerText = `Hola ${nombre}, tu rango es: ${nivel}`;
    resultadoDiv.className = "mt-6 p-4 rounded-lg text-center font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 block";
});
