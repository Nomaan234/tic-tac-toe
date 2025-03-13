let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");

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

boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        
       if(turnX)
       {
         box.innerText = "X";
         turnX=false;
       }
       else{
         box.innerText = "O";
         turnX=true;
       }
       box.disabled =true;
       checkWinner();
    });
});

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
    }
}
}
};
