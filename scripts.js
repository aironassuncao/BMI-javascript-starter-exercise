function calcularIMC(event) {
  event.preventDefault();

  var peso = parseFloat(document.getElementById('peso').value);
  var alturaCm = parseFloat(document.getElementById('altura').value);
  var alturaMetros = alturaCm / 100;

  if (isNaN(peso) || isNaN(alturaMetros) || peso <= 0 || alturaMetros <= 0) {
      alert("Por favor, insira valores válidos para peso e altura.");
      return;
  }

  var imc = peso / (alturaMetros * alturaMetros);
  imc = imc.toFixed(2);

  var resultadoDiv = document.getElementById('resultado');
  var infoDiv = document.getElementById('info');

  resultadoDiv.style.display = 'block';
  resultadoDiv.innerHTML = "Seu IMC é: " + imc;

  // Determine the IMC category and color
  let category = '';
  let description = '';

  if (imc < 18.5) {
      category = 'Abaixo do peso';
      description = 'Você está abaixo do peso ideal. É recomendável consultar um nutricionista.';
      infoDiv.className = 'underweight';
  } else if (imc < 24.9) {
      category = 'Peso normal';
      description = 'Parabéns! Seu peso está dentro da faixa normal.';
      infoDiv.className = 'normal';
  } else if (imc < 29.9) {
      category = 'Sobrepeso';
      description = 'Você está acima do peso ideal. Considere adotar um estilo de vida mais saudável.';
      infoDiv.className = 'overweight';
  } else {
      category = 'Obesidade';
      description = 'Você está na faixa de obesidade. É importante buscar orientação médica.';
      infoDiv.className = 'obese';
  }

  infoDiv.style.display = 'block';
  infoDiv.innerHTML = `<strong>Categoria:</strong> ${category}<br><p>${description}</p>`;
}
