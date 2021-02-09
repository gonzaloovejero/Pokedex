function all(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let element = document.getElementById("elem");
      element.innerHTML = `

        <h2>Name: ${data.name}</h2>
        <img src='${data.sprites.front_default}'/> <br>
        <h5>Order: ${data.order}</p> <br>
        <h5>Experience: ${data.base_experience}</p> <br> 
        <h5>Heigh: ${data.height}cm</p> <br>
        <h5>Weight: ${data.weight}kg</p> <br>
        
        
        `;

      console.log(data);
    });
}

document.getElementById("button").addEventListener("click", function () {
  var resultado = document.getElementById("texto").value;
  console.log(resultado);
  all(resultado);
});


