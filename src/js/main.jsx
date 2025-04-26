import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './components/SecondsCounter';
import Buttons from './components/Buttons';

const root = ReactDOM.createRoot(document.getElementById('root'));
let counter = 0;
let intervalId;
let targetAlert = null;

function renderApp() {
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={counter} />
      <Buttons
        onStop={() => clearInterval(intervalId)}
        onReset={() => {
          counter = 0;
          renderApp();
        }}
        onSetAlert={(seconds) => {
          targetAlert = seconds;
        }}
      />
    </React.StrictMode>
  );
  // Verificar alerta
  if (targetAlert !== null && counter === targetAlert) {
    alert(`¡Alerta! Llegaste a ${targetAlert} segundos`);
    targetAlert = null;
  }
}
// Iniciar contador
intervalId = setInterval(() => {
  counter += 1;
  renderApp();
}, 1000);
// Render inicial
renderApp();