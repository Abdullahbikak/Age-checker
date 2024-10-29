var age = prompt("Enter your age:");

var category;

if(age >= 0 && age <= 12){
    category = "Child"
} else if(age >= 13 && age <= 19){
    category = "Teenager"
} else if(age >= 20 && age <= 59){
    category = "Adult"
} else if(age >= 60){
    category = "Senior"
} else {
    category = "Invalid age"
}

alert("You belong to the" + " " + category + " " + "category");