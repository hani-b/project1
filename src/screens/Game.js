import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Pour animations
import './Game.css';

export const Game = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(localStorage.getItem('bestScore') || 0);
  const [difficulty, setDifficulty] = useState('easy');
  const [timeLeft, setTimeLeft] = useState(10);
  const [operation, setOperation] = useState('+'); // Type d’opération

  const generateQuestion = () => {
    let min, max;
    switch (difficulty) {
      case 'medium':
        min = 10;
        max = 50;
        break;
      case 'hard':
        min = 50;
        max = 100;
        break;
      default:
        min = 1;
        max = 10;
    }

    const newNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const newNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const operations = ['+', '-', '*', '/']; // Ajout des opérations
    const randomOp = operations[Math.floor(Math.random() * operations.length)];

    setNum1(newNum1);
    setNum2(newNum2);
    setOperation(randomOp);
    setAnswer('');
    setMessage('');
    setTimeLeft(20);
  };

  const calculateResult = () => {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? (num1 / num2).toFixed(2) : 0; // Arrondi à 2 décimales
      default:
        return 0;
    }
  };

  const checkAnswer = () => {
    if (parseFloat(answer) === calculateResult()) {
      setMessage('✅ Correct !');
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
        localStorage.setItem('bestScore', newScore);
      }
    } else {
      setMessage('❌ Faux ! Réessaie.');
    }
    setTimeout(generateQuestion, 1000);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setMessage('⏳ Temps écoulé ! Question suivante...');
      setTimeout(generateQuestion, 2000);
    }
  }, [timeLeft]);

  useEffect(() => {
    generateQuestion();
  }, [difficulty]);

  return (
    <motion.div 
      className="game-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>🧠 Jeu de Calcul Mental</h2>
      <p>🎯 Score : {score} | 🏆 Meilleur score : {bestScore}</p>
      <motion.h3
        key={`${num1}${operation}${num2}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {num1} {operation} {num2} = ?
      </motion.h3>
      <p>⏳ Temps restant : {timeLeft} s</p>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ta réponse"
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={checkAnswer}
      >
        Valider
      </motion.button>
      <p>{message}</p>

      {/* Sélecteur de difficulté */}
      <div>
        <label>🔧 Difficulté : </label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Facile</option>
          <option value="medium">Moyen</option>
          <option value="hard">Difficile</option>
        </select>
      </div>
    </motion.div>
  );
};

export default Game;
