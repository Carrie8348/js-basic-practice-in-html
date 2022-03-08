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