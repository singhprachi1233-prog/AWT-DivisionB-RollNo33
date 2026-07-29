function validateForm(){

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let topics = document.getElementById("topics").value;
    let hours = document.getElementById("hours").value;
    let rating = document.getElementById("rating").value;


    if(name=="" || roll=="" || topics=="" || hours=="" || rating==""){
        alert("Please fill all fields");
        return false;
    }


    if(rating < 1 || rating > 10){
        alert("Rating should be between 1 and 10");
        return false;
    }


    
    let lastDigit = roll % 10;

    if(lastDigit % 2 == 0){
        alert("Roll Number ends with EVEN digit");
    }
    else{
        alert("Roll Number ends with ODD digit");
    }


    calculateProgress(name, topics, hours, rating);

    return false;
}



function calculateProgress(name, topics, hours, rating){

    let category;


    if(topics>=8 && hours>=20 && rating>=8){
        category="Excellent";
    }
    else if(topics>=5 && hours>=10 && rating>=5){
        category="Good";
    }
    else{
        category="Needs Improvement";
    }



    
    let jsTopics=[
        "Variables",
        "Functions",
        "DOM Manipulation"
    ];


    let list="<ul>";

    jsTopics.forEach(function(topic){
        list += "<li>"+topic+"</li>";
    });

    list+="</ul>";



    document.getElementById("result").innerHTML =
    "Hello "+name+
    "<br>Progress Category: "+category+
    "<br><br>JavaScript Topics Learned:"+list;

}