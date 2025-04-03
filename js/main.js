document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
    
    const title = document.getElementById('title');
    const urlParams = new URLSearchParams(window.location.search);
    
    // Se veio do NÃO, mantém a mensagem de rejeição
    if (urlParams.get('rejected') !== 'true') {
      const text = 'I love my conversante'.split('');
      let index = 0;
      
      const type = () => {
        if (index < text.length) {
          title.innerHTML += text[index++];
          setTimeout(type, 300);
        }
      };
      
      type();
    }
  }, 1000);
});