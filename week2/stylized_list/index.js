var harryPotter = [
    {
        "name": "Harry Potter",
        "house": " Gryffindor",
        "patronus": " Stag"
    },
    {
        "name": "Luna Lovegood",
        "house": " Ravenclaw",
        "patronus": " Hare"   
    },
    {
        "name": "Ron Wesley",
        "house": " Gryffindor",
        "patronus": " Jack Russell Terrier"
    },
    {
        "name": "Severus Snape",
        "house": " Slytherin",
        "patronus": " Doe"
    },
    {
        "name": "Ginny Weasley",
        "house": " Gryffindor",
        "patronus": " Horse"
    }
];


var hpList = document.getElementById("hpCharacters");
for (var i = 0; i < harryPotter.length; i++){
    hpList.innerHTML += "<li>" + Object.values(harryPotter[i]) + "</li>"
};

hpList.style.color = "maroon"
hpList.style.fontSize = "45px"