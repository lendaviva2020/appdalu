import React from 'react';

function CouponCard() {
  const handleCopy = () => {
    navigator.clipboard.writeText('BEAUTY15LU');
    alert('Cupom copiado!');
  };

  return (
    <div className="coupon-card">
      <div className="coupon-icon">🎁</div>
      <h2>15% OFF na Primeira Compra!</h2>
      <p>
        Use o cupom <span className="coupon-code">BEAUTY15LU</span> no checkout e aproveite seu desconto especial.
      </p>
      <button className="btn-primary" onClick={handleCopy}>Copiar Cupom</button>
    </div>
  );
}
export default CouponCard;