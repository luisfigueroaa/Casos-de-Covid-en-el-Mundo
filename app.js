document.querySelector(".btn").addEventListener("click", function() {
  let activos = document.querySelector(".activos");
  let confirmados = document.querySelector(".confirmados");
  let recuperados = document.querySelector(".recuperados");
  let muertes = document.querySelector(".muertes");
  const pais = document.querySelector(".pais").value;
  console.log(pais);
  document.querySelector(".paisMostrar").innerHTML = "<b>Pais: </b>" + pais;

  fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
      pais.textContent = pais;
      data[pais].forEach(({ date, confirmed, recovered, deaths }) => {
        // console.log(`${date} active cases: ${confirmed - recovered - deaths}`);
        activos.textContent = confirmed - recovered - deaths;
        confirmados.textContent = confirmed;
        recuperados.textContent = recovered;
        muertes.textContent = deaths;
      });
    });
});
