import React from 'react';
import './DetailPage.css';

import { useParams } from 'react-router-dom';
import { create } from 'canvas-confetti';

export default function DetailPage() {
  //import id as prop from Main via services fetch
  var myCanvas = document.createElement('canvas');
  document.body.appendChild(myCanvas);

  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
    // any other options from the global
    // confetti function
  });
  let { id } = useParams();

  return <div>{id}</div>;
}
