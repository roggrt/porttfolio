'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Ejemplos de código simplificados para mejor rendimiento
const codeExamples = [
    {
        language: 'React',
        filename: 'App.jsx',
        code: `import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="container">
      <h1>Torisoftt</h1>
      <p>Contador: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="btn"
      >
        Incrementar
      </button>
    </div>
  );
}`
    },
    {
        language: 'PHP',
        filename: 'index.php',
        code: `<?php
// Conexión a la base de datos
$host = "localhost";
$user = "root";
$database = "torisoftt";

$conn = mysqli_connect($host, $user, "", $database);

// Consulta de proyectos
$sql = "SELECT * FROM proyectos WHERE estado = 'activo'";
$result = mysqli_query($conn, $sql);

// Mostrar proyectos
while($row = mysqli_fetch_assoc($result)) {
    echo "<div class='project'>";
    echo "<h3>" . $row["nombre"] . "</h3>";
    echo "<p>" . $row["descripcion"] . "</p>";
    echo "</div>";
}

mysqli_close($conn);
?>`
    },
    {
        language: 'CSS',
        filename: 'styles.css',
        code: `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eaeaea;
}

.btn {
  background-color: #ff3e00;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #e03700;
}`
    },
    {
        language: 'JavaScript',
        filename: 'script.js',
        code: `// Configuración de la aplicación
const config = {
  apiUrl: 'https://api.torisoftt.com',
  timeout: 5000
};

// Función para obtener proyectos
async function fetchProjects() {
  try {
    const response = await fetch(\`\${config.apiUrl}/projects\`);
    
    if (!response.ok) {
      throw new Error('Error al obtener proyectos');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}`
    }
];

const CodeEditor = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    // Cambiar a una pestaña específica
    const changeTab = (index) => {
        // Si ya estamos en esa pestaña, no hacemos nada
        if (index === activeIndex) return;

        // Detener rotación automática al interactuar manualmente
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setActiveIndex(index);
    };

    // Rotación automática entre pestañas
    useEffect(() => {
        // Configurar rotación automática
        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % codeExamples.length);
        }, 10000); // Cambiar cada 10 segundos

        // Limpiar al desmontar
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // Obtener el código actual
    const currentCode = codeExamples[activeIndex].code;

    // Separar el código en líneas para los números de línea
    const lines = currentCode.split('\n');

    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            {/* Barra superior estilo macOS */}
            <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 flex items-center border-b border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <motion.div
                    key={`filename-${activeIndex}`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 text-xs text-gray-500 dark:text-gray-400 flex-1 text-center"
                >
                    {codeExamples[activeIndex].filename}
                </motion.div>
            </div>

            {/* Pestañas de archivos */}
            <div className="flex bg-gray-50 dark:bg-gray-900 text-sm border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
                {codeExamples.map((example, index) => (
                    <button
                        key={example.filename}
                        className={`px-4 py-2 flex items-center border-r border-gray-200 dark:border-gray-700 ${
                            index === activeIndex
                                ? 'bg-white dark:bg-gray-800 text-accent-red dark:text-accent-yellow font-medium'
                                : 'text-gray-600 dark:text-gray-400'
                        }`}
                        onClick={() => changeTab(index)}
                    >
                        <span>{example.filename}</span>
                    </button>
                ))}
            </div>

            {/* Editor de código */}
            <div
                className="font-mono text-sm text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-800 overflow-auto"
                style={{ height: '280px' }}
            >
                <div className="p-0 relative flex">
                    {/* Números de línea */}
                    <div className="w-10 px-2 py-4 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 text-right select-none">
                        {lines.map((_, i) => (
                            <div
                                key={i}
                                className="text-xs text-gray-400 dark:text-gray-600 leading-5 h-5"
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>

                    {/* Código con animación de transición */}
                    <div className="flex-1 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.pre
                                key={`code-${activeIndex}`}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.3 }}
                                className="py-4 pl-4 pr-4 leading-5 w-full"
                            >
                                {currentCode}
                            </motion.pre>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Barra de estado */}
            <div className="px-4 py-1 bg-gray-50 dark:bg-gray-900 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                <motion.span
                    key={`language-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    {codeExamples[activeIndex].language}
                </motion.span>
                <span>UTF-8</span>
            </div>
        </div>
    );
};

export default CodeEditor;