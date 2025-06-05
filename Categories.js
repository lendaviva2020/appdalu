import React from 'react';

const categories = [
  { label: 'Novidades', icon: '⚡' },
  { label: 'Roupas', icon: '👗' },
  { label: 'Bolsas', icon: '👜' },
  { label: 'Perfumaria', icon: '🎁' },
  { label: 'Kits', icon: '🧴' },
  { label: 'Promoções', icon: '🏷️' },
];

function Categories() {
  return (
    <section className="categories">
      <h2 className="categories-title">Navegue pelas Categorias</h2>
      <div className="categories-list">
        {categories.map((cat, idx) => (
          <button
            key={cat.label}
            className={`category-btn${idx === 0 ? ' selected' : ''}`}
          >
            <span className="cat-icon">{cat.icon}</span> {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}
export default Categories;