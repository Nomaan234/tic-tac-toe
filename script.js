let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

turnX = true; //playerX or playerO

const winPattern = [

    [0,1,2],
    [0,3,6,],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let count = 0 ;
boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        
        ++count;
       if(turnX)
       {
         box.innerText = "X";
         box.style.color = "red"
         turnX=false;
       }
       else{
         box.innerText = "O";
         box.style.color = "orange"
         turnX=true;
       }
       box.disabled =true;
       checkWinner();
    });
});

const resetBtn = ()=>{
  turnX = true;
  enableboxes();
  msgContainer.classList.add("hide");
  count = 0 ;

}

const disableboxes = () => {
  for(let box of boxes) {
    box.disabled = true ;
  }
}
const enableboxes = () => {
  for(let box of boxes) {
    box.disabled = false ;
    box.innerText = "";
  }
}

const showWinner = (winner) => {
  msg.innerText = `Welldone , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
}

const draw = () => {
  msg.innerText = `It's a Draw`;
  msgContainer.classList.remove("hide");
  disableboxes();
  count = 0 ;
}

const checkWinner = () => {
for (let pattern of winPattern)
{
let pos1val =boxes[pattern[0]].innerText ;
let pos2val =boxes[pattern[1]].innerText ;
let pos3val =boxes[pattern[2]].innerText ;

if(pos1val != "" && pos2val != "" && pos3val != "" )
{
    if(pos1val === pos2val && pos2val === pos3val)
    {
        console.log(`winner ${pos1val}`);
        showWinner(pos1val);
    }
    else{
      if(count===9)
      {
        draw();
      }
    }
}
}

};

reset.addEventListener("click" , resetBtn);
newbtn.addEventListener("click" , resetBtn);
