import React, { useState, useEffect } from 'react';
import './App.css';

import recipes from './recipes';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipDirection, setFlipDirection] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false); // Scrollataan alas
      } else {
        setShowHeader(true); // Scrollataan ylös
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNext = () => {
    if (currentPage < recipes.length - 1) {
      setFlipDirection('right');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setFlipDirection(null);
      }, 200);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setFlipDirection('left');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setFlipDirection(null);
      }, 200);
    }
  };

  const jumpToRecipe = (index) => {
    setFlipDirection(index > currentPage ? 'right' : 'left');
    setTimeout(() => {
      setCurrentPage(index);
      setFlipDirection(null);
    }, 200);
  };

  const recipe = recipes[currentPage];

  return (
    <div className="layout">
      <aside className={`sidebar ${showHeader ? 'visible' : 'hidden'}`}>
        <h2 className="sidebar-title">Recipes</h2>
        <ul className="recipe-list">
          {recipes.map((r, index) => (
            <li
              key={r.id}
              className={`recipe-item ${index === currentPage ? 'active' : ''}`}
              onClick={() => jumpToRecipe(index)}
            >
              {r.title}
            </li>
          ))}
        </ul>
      </aside>

      <div className="content">
        <header className="top-header">
          <h1>B's Cookbook</h1>
        </header>

        <main className="book-open">
          <div className={`book-inner ${flipDirection === 'right' ? 'flip-right' : ''} ${flipDirection === 'left' ? 'flip-left' : ''}`}>
            <div className="book-page left-page">
              <img src={recipe.image} alt="" className="recipe-image" />
              <div className="corner left-corner" onClick={handlePrevious} title="Previous page" />
            </div>

            <div className="book-page right-page">
              <div className="page-content">
                <h1 className="recipe-title">{recipe.title}</h1>
                <p className="recipe-servings">{recipe.servings}</p>
                <div className="recipe-ingredients">
                  <h3>What you need</h3>
                  <ul>
                    {recipe.ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="recipe-instructions">
                  <h3>Instructions</h3>
                  <p>{recipe.instructions}</p>
                </div>
              </div>
              <div className="corner right-corner" onClick={handleNext} title="Next page" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
