const form = document.getElementById("forms");

//get request
axios.get("https://api.vschool.io/[kelly.compton]/todo")
.then(response => {
    
    for (let i = 0; i < response.data.length; i++) {

    const li = document.createElement("li");
    const ul = document.getElementsByTagName("ul")[0]
    ul.prepend(li);
    li.classList = "list";

    const h2 = document.createElement("h2");
    h2.textContent = response.data[i].title;
    h2.setAttribute("class", "myP")
    h2.setAttribute("contenteditable", "false")
    li.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent = "Products needed: " + response.data[i].description;
    // h3.setAttribute("class", "myP")
    h3.setAttribute("contenteditable", "false")
    li.appendChild(h3);

    const h4 = document.createElement("h4");
    h4.textContent = "$" + response.data[i].price;
    // h4.setAttribute("class", "myP")
    h4.setAttribute("contenteditable", "false")
    li.appendChild(h4);

    //Checkbox - Put
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.id = response.data[i]._id;
    if (response.data[i].completed === true) {
        checkbox.checked = true;
        h2.style.textDecorationLine = "line-through";
        h3.style.textDecorationLine = "line-through";
        h4.style.textDecorationLine = "line-through";  
    }
    li.appendChild(checkbox);
    
    checkbox.addEventListener("click", (event) => {
        let updates;
        if (checkbox.checked) {
            updates = true;
        } else {
            updates = false;
        }
        axios.put("https://api.vschool.io/[kelly.compton]/todo/" + event.currentTarget.id, {completed:updates})
        .then(response => (response.data))
        .catch(error => console.log(error))
    })


    //delete button
    const button = document.createElement("button")
        button.textContent = "Delete";
        button.id = response.data[i]._id
        
        li.appendChild(button);
        button.addEventListener("click", (event) => {
        axios.delete("https://api.vschool.io/[kelly.compton]/todo/" + event.currentTarget.id)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    })






    const edit = document.createElement("button");
     edit.textContent = "Edit";
     edit.style.marginLeft = "30px"
     edit.id = response.data[i]._id
     li.appendChild(edit);


    edit.addEventListener("click", (e) => {
    
        var x = document.getElementById("box");
        if (x.style.display === "none") {
          x.style.display = "block";
          edit.textContent = "Submit"
        } else {
          x.style.display = "none";
        }
    })

    const secForm = document.getElementById("box");

    // const submitBut = document.getElementsByClassName("button1")[0];
    // submitBut.id = response.data[i]._id

    // const submits = document.createElement("button");
    // submits.textContent = "Submit Edit";
    // submits.id = response.data[i]._id;
    // secForm.appendChild(submits);

    edit.addEventListener("click", function(event){
        //event.preventDefault()
    
    var t = document.getElementById("titleInput").value;
    var y = document.getElementById("detailsInput").value;
    var z = document.getElementById("numberInput").value;

    if (t.length == 0) {
        t = response.data[i].title
    }

    if (y.length == 0) {
        y = response.data[i].description
    }
    if (z.length == 0) {
        z = response.data[i].price
    }
       
    
        axios.put("https://api.vschool.io/[kelly.compton]/todo/" + event.currentTarget.id, {
            title:t,
            description:y,
            price:z
    })
        .then(response => (response.data))
        .catch(error => console.log(error))

    })

    }

})

// }
// })
.catch(error => console.log(error))

// post--new task
form.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value
    }
    axios.post("https://api.vschool.io/[kelly.compton]/todo", newTodo)
        .then(response => {response.data 
        form.reset()})
        .catch(error => console.log(error))
       
})




// function myFunction(buttons) {
//     var x = document.getElementById("myP")
//     if (x.contentEditable == "true") {
//       x.contentEditable = "false";
//       buttons.innerHTML = "Enable content of p to be editable!";
//     } else {
//       x.contentEditable = "true";
//       buttons.innerHTML = "Disable content of p to be editable!";
//     }
//   }

