import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dice from '../components/Dice';
import "../Styles/loading.css"

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Activity');
    }, 3500);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="loading-container">
      <Dice autoRoll={true} />
    </div>
  );
};

export default Loading;
