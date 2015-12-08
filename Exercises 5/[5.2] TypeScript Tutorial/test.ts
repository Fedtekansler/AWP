interface Person{
	name: string
}
interface Pet{
	name: string
}
function greetPet(p: Pet): string {
    return "Hello little "+p.name;
}
function greetPerson(p: Person): string {
    return "Nice to meet you "+p.name;
}
var polle = {name: "Polle"}; // Not explicitly creating an object of any one type.
document.body.innerHTML = greetPet(polle)+"<br>"+greetPerson(polle);