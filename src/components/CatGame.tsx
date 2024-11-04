// src/components/CatGame.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 200;
const GROUND_HEIGHT = 30;
const CAT_WIDTH = 40;
const CAT_HEIGHT = 40;

export default function CatGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const gameRef = useRef({
    catY: 0,
    velocity: 0,
    obstacles: [] as { x: number; width: number; height: number }[],
    animationFrame: 0
  });

  const resetGame = () => {
    const game = gameRef.current;
    game.catY = CANVAS_HEIGHT - GROUND_HEIGHT - CAT_HEIGHT;
    game.velocity = 0;
    game.obstacles = [];
    setScore(0);
  };

  const startGame = () => {
    resetGame();
    setIsPlaying(true);
    gameLoop();
  };

  const jump = () => {
    if (gameRef.current.velocity === 0) {
      gameRef.current.velocity = -12;
    }
  };

  const gameLoop = () => {
    if (!isPlaying) return;

    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    const game = gameRef.current;

    // Física básica
    game.velocity += 0.8;
    game.catY += game.velocity;

    // Mantener al gato en el suelo
    if (game.catY > CANVAS_HEIGHT - GROUND_HEIGHT - CAT_HEIGHT) {
      game.catY = CANVAS_HEIGHT - GROUND_HEIGHT - CAT_HEIGHT;
      game.velocity = 0;
    }

    // Generar obstáculos
    if (Math.random() < 0.02) {
      game.obstacles.push({
        x: CANVAS_WIDTH,
        width: 20,
        height: 40 + Math.random() * 40
      });
    }

    // Mover y limpiar obstáculos
    game.obstacles = game.obstacles.filter(obstacle => {
      obstacle.x -= 5;
      return obstacle.x > -obstacle.width;
    });

    // Detectar colisiones
    const catX = 50;
    for (const obstacle of game.obstacles) {
      if (
        catX < obstacle.x + obstacle.width &&
        catX + CAT_WIDTH > obstacle.x &&
        game.catY < CANVAS_HEIGHT - GROUND_HEIGHT - obstacle.height
      ) {
        setIsPlaying(false);
        if (score > highScore) {
          setHighScore(score);
        }
        return;
      }
    }

    // Incrementar puntuación
    setScore(prev => prev + 1);

    // Dibujar
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Dibujar fondo
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Dibujar suelo
    ctx.fillStyle = '#666';
    ctx.fillRect(0, CANVAS_HEIGHT - GROUND_HEIGHT, CANVAS_WIDTH, GROUND_HEIGHT);

    // Dibujar gato
    ctx.fillStyle = '#000';
    ctx.fillRect(50, game.catY, CAT_WIDTH, CAT_HEIGHT);
    
    // Dibujar obstáculos
    ctx.fillStyle = '#f44336';
    game.obstacles.forEach(obstacle => {
      ctx.fillRect(
        obstacle.x,
        CANVAS_HEIGHT - GROUND_HEIGHT - obstacle.height,
        obstacle.width,
        obstacle.height
      );
    });

    // Dibujar puntuación
    ctx.fillStyle = '#000';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);

    game.animationFrame = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
      resetGame();

      // Dibujar estado inicial
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillStyle = '#666';
        ctx.fillRect(0, CANVAS_HEIGHT - GROUND_HEIGHT, CANVAS_WIDTH, GROUND_HEIGHT);
        ctx.fillStyle = '#000';
        ctx.fillRect(50, gameRef.current.catY, CAT_WIDTH, CAT_HEIGHT);
      }
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (!isPlaying) {
          startGame();
        } else {
          jump();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      cancelAnimationFrame(gameRef.current.animationFrame);
    };
  }, [isPlaying]);

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        className="border-2 border-gray-300 rounded-lg bg-white cursor-pointer"
        onClick={() => {
          if (!isPlaying) {
            startGame();
          } else {
            jump();
          }
        }}
      />
      {!isPlaying && (
        <div className="text-center space-y-2">
          {score > 0 && (
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Game Over! Score: {score}
            </p>
          )}
          {highScore > 0 && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              High Score: {highScore}
            </p>
          )}
          <p className="text-gray-600 dark:text-gray-400">
            {score === 0 ? 'Presiona ESPACIO o haz clic para empezar' : 'Presiona ESPACIO o haz clic para jugar de nuevo'}
          </p>
        </div>
      )}
    </div>
  );
}