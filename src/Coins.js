import API from '@aws-amplify/api';
import React, { useEffect, useState } from 'react';

function Coins() {
  const [coins, updateCoins] = useState([]);
  const [input, updateInput] = useState({ limit: 5, start: 0 });

  function updateInputValue(type, value) {
    updateInput({ ...input, [type]: value });
  }

  // Call API
  async function fetchCoins() {
    const { limit, start } = input;
    const data = await API.get(
      'cryptoapi',
      `/coins?limit=${limit}&start=${start}`
    );
    updateCoins(data.coins);
  }

  return (
    <div>
      <input
        onChange={({ target: { value } }) => updateInputValue('limit', value)}
        placeholder='Limit'
      />
      <input
        onChange={({ target: { value } }) => updateInputValue('start', value)}
        placeholder='Start'
      />
      <button onClick={fetchCoins}>Fetch Coins</button>
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
