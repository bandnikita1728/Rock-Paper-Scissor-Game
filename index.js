let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choices");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#userscore");
const computerscorepara=document.querySelector("#computerscore");

const gencomputerchoice=()=>{
    const options=["rock", "paper","scissor"];
    const randIdx =Math.floor(Math.random()*3)
    return options[randIdx];
    


};
const drawgame=()=>{

    
    msg.innerText="game was draw,play again!!";
};

const showwinner=(userwin, userchoice, computerchoice)=>{
    if (userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText="you win!!";
        msg.style.backgroundColor="green";




    }else{
        computerscore++;
        computerscorepara.innerText=computerscore;
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
        
    }

};
const playGame=(userchoice)=>{
    
    const computerchoice= gencomputerchoice();
    

    if(userchoice===computerchoice){
        drawgame();


    }else{
        let userwin= true;
        if(userchoice==="rock"){
            userwin = computerchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=computerchoice==="scissor"? false:true;
        }else{
            userwin= computerchoice==="rock"?false:true;
        }
        showwinner(userwin, userchoice, computerchoice)
    }

};

choices.forEach((choice) => {
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        
       
        playGame(userchoice);


    });
 

    
});
