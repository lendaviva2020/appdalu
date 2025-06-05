import React from 'react';

function SearchBox() {
  return (
    <section className="search-section">
      <h2 className="search-title">Nossos Tesouros de Beleza</h2>
      <form className="filter-box">
        <div className="filter-row">
          <label className="filter-label">Filtrar Produtos</label>
        </div>
        <div className="filter-row">
          <input className="filter-input" placeholder="Nome, marca, categoria..." />
        </div>
        <div className="filter-row">
          <select className="filter-select">
            <option>Todas as Marcas</option>
            <option>Marca A</option>
            <option>Marca B</option>
          </select>
          <input className="filter-input" placeholder="R$ 0" />
          <input className="filter-input" placeholder="R$ 500+" />
        </div>
        <div className="filter-row">
          <label>
            <input type="checkbox" /> Novidades
          </label>
          <button type="button" className="btn-secondary">Limpar Filtros</button>
        </div>
      </form>
    </section>
  );
}
export default SearchBox;