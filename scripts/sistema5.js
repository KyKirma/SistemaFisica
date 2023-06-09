function calcular() {
    // Solicitar os valores de entrada ao usuário
    var massaInput = parseFloat(document.getElementById("massa").value);
    var forcaInput = parseFloat(document.getElementById("forca").value);
    var razaoInput = parseFloat(document.getElementById("razao").value);
    var qntBlocosInput = parseFloat(document.getElementById("qntBlocos").value);
    var tracaoInput = parseFloat(document.getElementById("tracaoN").value);
    
    // Calcular a massa total com base nos valores de entrada
    const massaN = massaInput + (qntBlocosInput - 1) * razaoInput;
    const massaTotal = (qntBlocosInput * (massaInput + massaN)) / 2;
  
    var tensao = NaN;
    var aceleracao = 0;
  
    if (tracaoInput < qntBlocosInput) {
      // Calcular a massa da tensão e a massa total da tensão se a tração for menor que a quantidade de blocos
      const massaDaTensao = massaInput + (tracaoInput - 1) * razaoInput;
      const massaTotalTensao = (tracaoInput * (massaDaTensao + massaInput)) / 2;
      
      // Calcular a aceleração e a tensão com base nas massas calculadas
      aceleracao = forcaInput / massaTotal;
      tensao = massaTotalTensao * aceleracao;
    } else if (tracaoInput === qntBlocosInput) {
      // Calcular a aceleração e a tensão diretamente se a tração for igual à quantidade de blocos
      aceleracao = forcaInput / massaTotal;
      tensao = forcaInput;
    }
  
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><b>Aceleração do sistema:</b> ${aceleracao.toFixed(2)} <i>m/s²</i></li><br>
    <li><b> Tensão do fio no Bloco escolhido:</b> ${tensao.toFixed(2)} <i>N</i></li>`;

    
}
