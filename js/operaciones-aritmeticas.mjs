// 1. IMPORTACIÓN: Asegúrate que el nombre del archivo sea idéntico
import { sumar, restar, multiplicar, dividir } from './operaciones-aritmeticas.mjs';

// Funciones lógicas de aritmética
const operaciones = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
        if (b === 0) return "Error (div 0)";
        return (a / b).toFixed(2); // Limitamos a 2 decimales
    }
};


// Arrancar la primera vez
inicializar();