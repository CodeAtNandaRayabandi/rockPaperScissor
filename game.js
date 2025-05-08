function randomNumberGenerator(){
    return Math.floor(Math.random()*3)+1;
}
function result(input,comp){
    if(input==comp){
        document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.textContent="Result: Draw";
    }
    else if((input==1 && comp==2)||(input==2 && comp==3)||(input==3&&comp==1)){
        document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.textContent="Result: Computer won";
    }
    else{
        document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.textContent="Result: You won";
    }
}
function compChoiceDisplay(comp){
    //const addresses=["Resources\Images\rock.jpg","Resources/Images/paper.jpeg","Resources\Images\scissors.jpg"];
    switch(comp){
        case 1:{
            document.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHIiwU8uVoAk9ky8t15hYouYcWK5MANg7Ig&s");
        }break;
        case 2:{
            document.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.setAttribute("src","https://static.vecteezy.com/system/resources/thumbnails/043/068/979/small/white-ripped-crumpled-paper-piece-png.png");
        }break;
        case 3:{
            document.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.setAttribute("src","https://img.freepik.com/premium-vector/scissors-isolated-white-background-scissors-icon-design-silhouette-scissors-icon_977255-3481.jpg?semt=ais_hybrid&w=740");
        }break;
    }
    
}
function onClickRock(){
    var comp=randomNumberGenerator();
    var input=1;
    compChoiceDisplay(comp);
    result(input,comp);
}
function onClickPaper(){
    var comp=randomNumberGenerator();
    var input=2;
    compChoiceDisplay(comp);
    result(input,comp);
}
function onClickScissors(){
    var comp=randomNumberGenerator();
    var input=3;
    compChoiceDisplay(comp);
    result(input,comp);
}