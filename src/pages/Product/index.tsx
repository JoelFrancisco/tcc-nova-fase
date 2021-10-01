import React from 'react';

import Header from '../../components/Header';

const Product = ({ name: string="", price: number="" }) => {
  return (
    <div className="container min-h-screen min-w-full m-0 p-0">
      <Header />
      <img src="" alt="product" />
      <div className="container mx-auto">
        <div className="font-medium text-4xl">TESTE</div>
        <div className="font-normal text-3xl text-green-700">R$ 35,00</div>
        <div className="font-normal text-xl">Ou em até 3x no cartão</div>
        <div className="font-normal text-xl">Cor: branca</div>
      </div>
    </div>
  );
}

export default Product;