// 1. IMPORTACIÓN: Asegúrate que el nombre del archivo sea idéntico
import { sumar, restar, multiplicar, dividir } from './operaciones-aritmeticas.mjs';

// 2. SELECCIÓN DE ELEMENTOS (IDs corregidos)
const numeroIzq = document.getElementById('numeroIzq');
const numeroDer = document.getElementById('numeroDer');
const btnGenerar = document.getElementById('btnNuevosNumeros');

const resSuma = document.getElementById('resultadoSuma');
const resResta = document.getElementById('resultadoResta');
const resMulti = document.getElementById('resultadoMultiplicar');
const resDiv = document.getElementById('resultadoDividir');

const btnSuma = document.getElementById('btnSumar');
const btnResta = document.getElementById('btnRestar');
const btnMulti = document.getElementById('btnMultiplicar');
const btnDiv = document.getElementById('btnDividir');

// 3. VARIABLES DE ESTADO
let val1 = 0;
let val2 = 0;

// 4. LÓGICA DE GENERACIÓN
function inicializar() {
    val1 = Math.floor(Math.random() * 101);
    val2 = Math.floor(Math.random() * 101);
    
    numeroIzq.textContent = val1;
    numeroDer.textContent = val2;

    // Limpiar textos al generar nuevos
    [resSuma, resResta, resMulti, resDiv].forEach(el => el.textContent = "");
}

// 5. EVENTOS (El "enganche" de los botones)
btnGenerar.addEventListener('click', inicializar);

btnSuma.addEventListener('click', () => {
    resSuma.textContent = "Suma: " + sumar(val1, val2);
});

btnResta.addEventListener('click', () => {
    resResta.textContent = "Resta: " + restar(val1, val2);
});

btnMulti.addEventListener('click', () => {
    resMulti.textContent = "Multiplicación: " + multiplicar(val1, val2);
});

btnDiv.addEventListener('click', () => {
    try {
        const resultado = dividir(val1, val2);
        resDiv.textContent = "División: " + (Number.isInteger(resultado) ? resultado : resultado.toFixed(2));
    } catch (error) {
        resDiv.textContent = "Error: " + error.message;
    }
});

// Arrancar la primera vez
inicializar();