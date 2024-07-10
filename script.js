let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#btn");
let mssgContainer = document.querySelector(".mssg-container")
let mssg = document.querySelector("#mssg")
let turnO = true;
let count = 0;
const winpatterns = [
    [0,1,2],[0,3,6],[6,7,8],
    [3,4,5],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText ="O";
            turnO = false;
        }
        else{
            box.innerText ="X";
            turnO = true;
        }
        box.disabled =true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
          }
    })
})
const gameDraw = () => {
    mssg.innerText = "Game was a Draw";
    mssgContainer.classList.remove("hide");
    
    disableBoxes();
  };
  
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
    }
}

const checkWinner = ()=>{
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val != ""){
         if(pos1val === pos2val && pos2val === pos3val){
            console.log("winner ",pos1val)
            showWinner(pos1val);
            disableBoxes();
            return true;
         }
    }}
}

const showWinner = (winner) =>{
    mssg.innerText = `Congratulations , The Winner Is ${winner}`;
    mssgContainer.classList.remove("hide");
}

const resetGame =()=>{
    turnO = true;
    enableBoxes();
    count = 0;
    mssgContainer.classList.add("hide");
    boxes.forEach(box => {
        box.innerText = ""; 
    });
}
btn.addEventListener("click", resetGame);
