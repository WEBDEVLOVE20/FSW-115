const form = document.getElementById("forms");
const submits = document.getElementById("submit");

//get requst
axios.get("https://api.vschool.io/[kelly.compton]/todo")
.then(response => {
    for (let i = 0; i < response.data.length; i++) {

        const h2 = document.createElement("h2")
        h2.textContent = response.data[i].title
        document.getElementsByTagName("ul")[0].appendChild(h2)

        const h3 = document.createElement("h3")
        h3.textContent = "Description: " + response.data[i].description
        document.getElementsByTagName("ul")[0].appendChild(h3)

        const h4 = document.createElement("h4")
        h4.textContent = "Price of products: $" + response.data[i].price
        document.getElementsByTagName("ul")[0].appendChild(h4)


    // const li = document.createElement("li")
    // li.textContent = response.data[i].title
    // const ul = document.getElementsByTagName("ul")[0]
    // ul.append(li)
    //li.classList = "list"
    
    //checkbox - put
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.id = response.data[i]._id;
    document.getElementsByTagName("ul")[0].appendChild(checkbox)
    
    checkbox.addEventListener("click", (event) => {
        if (checkbox.checked === true) {
            response.data[i].completed === true
        
        axios.put("https://api.vschool.io/[kelly.compton]/todo" + event.target.id)

        .then(response => (response.data))
        .catch(error => console.log(error))
        }
    })

    //line-through
    if (response.data[i].completed === true) {
        h2.style.textDecorationLine = "line-through"
        h3.style.textDecorationLine = "line-through" 
        h4.style.textDecorationLine = "line-through"  
}

    //delete button
// const button = document.createElement("button")
    // button.textContent = "X"
    // button.id = data[i]._id
    // document.getElementsByTagName("li").appendChild(button)
    // button.addEventListener("click", (event) => {
    //     axios.delete("https://api.vschool.io/[kelly.compton]/todo" + event.target.id)
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log())
    // })
    
    //document.body.appendChild
}
})
.catch(error => console.log(error))



// post--new task
form.addEventListener("submits", function(event){
    event.preventDefault()

    const newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value
}
    
    axios.post("https://api.vschool.io/[kelly.compton]/todo", newTodo)
        .then(response => (response.data))
        .catch(error => console.log(error))
})



    //clear list

    // function clearList(){
    // const el = document.getElementById('forms')
    // while(el.firstChild){
    // el.removeChild(el.firstChild)
    // }
    // }
    // getData()
    
   

  
    