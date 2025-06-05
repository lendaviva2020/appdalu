import React from 'react';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Novidades Incríveis!</h1>
        <p>Lançamentos em maquiagem.</p>
        <button className="btn-primary">Compre Já</button>
      </div>
      {/* Indicador de slides */}
      <div className="banner-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}
export default Banner;