// Animação do título inicial
const title = document.querySelector('.title');
const text = 'Aceitas ir em uma jornada por uns bjinhos cmg minha frieren?'.split('');
title.innerHTML = text.map(char => 
  char !== ' ' ? `<span>${char}</span>` : `<span style='margin-right: 20px;'></span>`
).join('');

document.querySelectorAll('.title span').forEach(el => {
  el.style.animationDelay = `${Math.random() * 3}s`;
});

// Controle dos botões
let buttonSwapped = false;
const noButton = document.querySelector('.btn-no');
const yesButton = document.querySelector('.btn-yes');

// Comportamento do botão NÃO
noButton.addEventListener('click', function(e) {
  e.preventDefault();
  
  if (!buttonSwapped) {
    // Primeiro clique - vira SIM e mostra mensagem brava
    noButton.querySelector('.text').textContent = 'SIM';
    buttonSwapped = true;
    
    const angryMsg = document.createElement('div');
    angryMsg.innerHTML = 'Tentou apertar no não dvn xara? 😠';
    angryMsg.style.cssText = `
      position: absolute;
      color: white;
      background: #ff5555dd;
      padding: 10px 20px;
      border-radius: 20px;
      font-family: Arial;
      animation: floatUp 2s forwards;
      z-index: 100;
      left: 50%;
      transform: translateX(-50%);
      top: -50px;
    `;
    
    noButton.parentNode.appendChild(angryMsg);
    setTimeout(() => angryMsg.remove(), 2000);
    
  } else {
    // Segundo clique - redireciona com mensagem especial
    window.location.href = 'flower.html?rejected=true';
  }
});

// Comportamento do botão SIM
yesButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.location.href = 'flower.html?rejected=false';
});

// Estilos dinâmicos
const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    0% { opacity: 1; transform: translate(-50%, 0); }
    100% { opacity: 0; transform: translate(-50%, -100px); }
  }
`;
document.head.appendChild(style);