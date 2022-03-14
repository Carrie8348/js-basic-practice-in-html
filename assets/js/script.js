function outerFunction() {
    document.getElementById('outer').innerHTML = "destiny child";
};

var friends = ["yuki","sigh", "carrie"];

document.getElementById('pal').innerHTML = friends[0];

var cat = {
    name: "mia",
    gender: "girl",
    age: 9,
    likes: "Salmon"
}

document.getElementById("pet").innerHTML = cat.name + " is a" + cat.gender + " ," + " she is " + cat.age + " years old" + " and she likes " + cat.likes;

var x = potatoFunction (1, 3);
document.getElementById("sweetpotato").innerHTML = x;

function potatoFunction (a, b) {
    return a + b;
}

function area(a, b) {
    return a * b;
}
document.getElementById("area").innerHTML = "the aera of this square is" + area (3,4)

var SG = {ginger: "Geri", scary: "Mel B", baby: "Emma", sporty: "Mel C", posh: "Victoria"};

document.getElementById("spiceGirls").innerHTML = "She is " + SG.scary;

var person = {
    name: "Carrie",
    nationality: "Chinese",
    placeOfBorn: "Shanghai",
    gender: "female"
}

document.getElementById("tieshou").innerHTML = "Tie Shou is from " + person.placeOfBorn;