axios.get("https://api.vschool.io/[kelly.compton]/todo")
.then(response => {
    for (let i = 0; i < response.data.length; i++) {
    const tasks = document.createElement("li")
    const ul = document.getElementsByTagName("ul")[0]
    ul.append(tasks)
    tasks.classList = "list"
    tasks.textContent = response.data[i].title
    if (response.data[i].completed === true) {
        tasks.style.textDecorationLine = "line-through" 
}
    document.body.appendChild
}
})
.catch(error => console.log(error))

const form = document.getElementById("forms");
const submits = document.getElementById("submit");


form.addEventListener("submit", function(event){
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


    
//     // LISTS THE TODO TITLES TO THE DOM
// function listData(response){
//     // document.getElementById('todo-list').innerHTML = ""
//     //clearList()
//     for (let i = 0; i < response.data.length; i++) {
    
//     const tasks = document.getElementsByClassName("list")[i]
//         tasks.textContent = response.data[i].title
//     if (response.data[i].completed === true) {
//         tasks.style.textDecorationLine = "line-through" 
// }
//     document.body.appendChild
// }}

    // function clearList(){
    // const el = document.getElementById('todo-list')
    // while(el.firstChild){
    // el.removeChild(el.firstChild)
    // }
    // }
    // getData()
    
    // // FORM FOR THE POST REQUEST
    const todoForm = document["todo-form"]
    todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newTodo = {
    title: todoForm.title.value
    }
    todoForm.title.value = ""
    axios.post("https://api.vschool.io/[kelly.compton]/todo", newTodo)
    .then(res => getData())
    .catch(err => console.log(err))
    })
    