
const button2 = document.createElement("BUTTON");
button2.innerHTML = "CLICK ME";
document.body.appendChild(button2);

button2.addEventListener("click", function() {

    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
    for (let i = 0; i < response.data.results.length; i++) {
    const rickAndMorty = document.createElement("h1")
    rickAndMorty.textContent = response.data.results[i].name
    const randm = document.createElement("img")
    randm.src = response.data.results[i].image
    document.body.appendChild(rickAndMorty)
    document.body.appendChild(randm)
    }
})
.catch(error => console.log(error))
})
