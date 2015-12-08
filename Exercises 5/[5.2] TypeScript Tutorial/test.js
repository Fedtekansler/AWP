function greetPet(p) {
    return "Hello little " + p.name;
}
function greetPerson(p) {
    return "Nice to meet you " + p.name;
}
var polle = {}; // Not explicitly creating an object of any one type.
polle["name"] = "Polle";
document.body.innerHTML = greetPet(polle) + "<br>" + greetPerson(polle);
