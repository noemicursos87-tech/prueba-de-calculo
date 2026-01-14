import { sumar, restar, multiplicar, dividir } from './operaciones-aritmeticas.mjs';

// Elementos del DOM
// Funciones de operación (antes estaban en el .mjs)
const operaciones = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => b !== 0 ? (a / b).toFixed(2) : "Error"
};

// Referencias al DOM
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const btnGenerate = document.getElementById('btn-generate');

// Variables para guardar los números actuales
let n1 = 0;
let n2 = 0;

// FUNCIÓN PRINCIPAL: Generar números aleatorios
function generarNumeros() {
    // Genera números entre 1 y 50
    n1 = Math.floor(Math.random() * 50) + 1;
    n2 = Math.floor(Math.random() * 50) + 1;
    
    // Dibujar en los círculos
    num1El.textContent = n1;
    num2El.textContent = n2;
    
    // Limpiar resultados anteriores cada vez que se generen nuevos números
    document.querySelectorAll('.result-label').forEach(span => span.textContent = '');
}

// Configurar los botones de operación
document.getElementById('btn-suma').onclick = () => {
    document.getElementById('res-suma').textContent = operaciones.sumar(n1, n2);
};

document.getElementById('btn-resta').onclick = () => {
    document.getElementById('res-resta').textContent = operaciones.restar(n1, n2);
};

document.getElementById('btn-multi').onclick = () => {
    document.getElementById('res-mult').textContent = operaciones.multiplicar(n1, n2);
};

document.getElementById('btn-div').onclick = () => {
    document.getElementById('res-div').textContent = operaciones.dividir(n1, n2);
};

// Evento para el botón generar
btnGenerate.onclick = generarNumeros;

// Ejecutar una vez al inicio para que no empiece vacío
generarNumeros();

