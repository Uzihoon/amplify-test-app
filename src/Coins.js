import API from '@aws-amplify/api';
import React, { useEffect, useState } from 'react';

function Coins() {
  const [coins, updateCoins] = useState([]);

  // Call API
  async function fetchCoins() {
    const data = await API.get('cryptoapi', '/coins');
    updateCoins(data.coins);
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      {coins.map((coin, index) => (
        <div key={index}>
          <h2>
            {coin.name} - {coin.symbol}
          </h2>
          <h5>${coin.price_usd}</h5>
        </div>
      ))}
    </div>
  );
}

export default Coins;
