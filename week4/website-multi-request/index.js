
const button1 = document.createElement("BUTTON");
button1.innerHTML = "BREAKING BAD";
button1.style.alignContent = "center"
document.body.appendChild(button1);

button1.addEventListener("click", function() {
    axios.get("https://www.breakingbadapi.com/api/quotes")
    .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
        const bad = document.createElement("h1")
        bad.textContent = response.data[i].quote
        const author = document.createElement("h3")
        author.textContent = response.data[i].author
        document.body.appendChild(bad)
        document.body.appendChild(author)
        }
    })
    .catch(error => console.log(error))
})


