var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    
    setTimeout(function(){
        character.classList.remove("animate");
    },200);
}
var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>10 && characterTop>=140){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Prohrál jsi! Skóre: "+Math.floor(counter/100));
        counter=0;
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        
    }
},10)
