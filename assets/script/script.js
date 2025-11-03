// Espera o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {

  // 1. Selecionar os elementos
  const trilho = document.querySelector('.trilho');
  const btnPrev = document.querySelector('.btn-prev');
  const btnNext = document.querySelector('.btn-next');
  
  // 2. Verifica se os elementos existem
  if (trilho && btnPrev && btnNext) {
  
    // 3. Pega o PRIMEIRO item
    const firstItem = trilho.querySelector('.item'); 
  
    // 4. CALCULA O QUANTO ROLAR
    // Graças ao 'box-sizing: border-box;', o offsetWidth
    // agora é a largura EXATA que precisamos rolar (incluindo o padding).
    const scrollAmount = firstItem.offsetWidth; 
  
    // 5. Botão AVANÇAR
    btnNext.addEventListener('click', () => {
      // Usamos 'trilho.scrollLeft' para saber onde estamos
      // e 'Math.round()' para evitar erros de decimal
      const currentScroll = Math.round(trilho.scrollLeft);
      const newScroll = currentScroll + scrollAmount;
      
      console.log("Próximo. Rolando para:", newScroll);
      trilho.scrollTo({
        left: newScroll,
        behavior: 'smooth'  
      });
    });
  
    // 6. Botão VOLTAR
    btnPrev.addEventListener('click', () => {
      const currentScroll = Math.round(trilho.scrollLeft);
      const newScroll = currentScroll - scrollAmount;
      
      console.log("Voltar. Rolando para:", newScroll);
      trilho.scrollTo({
        left: newScroll,
        behavior: 'smooth'   
      });
    });
    
  } else {
    console.error("Não foi possível encontrar os elementos do carrossel.");
  }

});