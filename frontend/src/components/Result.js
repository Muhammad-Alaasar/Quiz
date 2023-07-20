import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Result(props) {
  const [rank, setRank] = useState(0);
  const navigate = useNavigate();

  // Fetch Rank
  const fetchRank = async () =>
    await fetch('http://localhost:3000/rank', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ result: props.secore }),
    })
      .then((res) => res.json())
      .then((res) => setRank(res));

  useEffect(() => {
    fetchRank();
  });

  return (
    <>
      <div className="rank">
        <h1>You finished it</h1>
        <h3>Your Rank {rank.rank ? Math.round((rank.rank / 30) * 100) : 0}%</h3>
      </div>
      <button className="try-again" onClick={() => navigate('/')}>
        Try Again
      </button>
    </>
  );
}
