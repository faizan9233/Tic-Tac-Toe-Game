// let boxes = document.querySelectorAll(".box");
// let isO = true;
// let winpos = [
//    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
//   [0, 3, 6], [1, 4, 7], [2, 5, 8],
//   [0, 4, 8], [2, 4, 6]  
// ];

// let text  = document.querySelector(".wintext");
// let newgame = document.querySelector(".newgame-btn");
// let resetbtn = document.querySelector(".reset");


// boxes.forEach(box=>{
//   box.addEventListener("click",()=>{   
//   if(isO)
//   {
//     box.innerHTML = "O";
//     isO=false;
//   }
//   else{
//     box.innerHTML = "X";
//     isO=true;
//   }
//   box.disabled = true;
//   CheckWinners();
//   });
 
// });


// const CheckWinners = ()=>{
//   for(pos of winpos)
// {
//   let pos1value = boxes[pos[0]].innerText;
//   let pos2value = boxes[pos[1]].innerText;
//   let pos3value = boxes[pos[2]].innerText;

//   if(pos1value!="" && pos2value!="" && pos3value!="")
//   {
//     if(pos1value===pos2value && pos2value===pos3value)
//     {
//        ShowWinner(pos1value);
      
//     }
//   } 
  
// }

// }

// const ShowWinner = (e)=>{
//   DisableBoxes();
//   text.classList.remove("hide");
//   text.innerText = `Winner is ${e}`;
// }

// const DisableBoxes = ()=>{
//   for(box of boxes)
//   {
//     box.disabled = true;
//   }
// }
// const EnalbeBoxes = ()=>{
//   for(box of boxes)
//   {
//     box.disabled = false;
//   }
//   for(box of boxes)
//   {
//     box.innerText = "";
//   }
// }
// const NewGame = ()=>{
//   isO=true;
//   text.classList.add("hide");
//   EnalbeBoxes();

// }

// newgame.addEventListener("click",NewGame);
// resetbtn.addEventListener("click",EnalbeBoxes);


let boxes = document.querySelectorAll(".box");
let isO = true;
let winpos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
     [0, 3, 6], [1, 4, 7], [2, 5, 8],
     [0, 4, 8], [2, 4, 6]  
];


let text  = document.querySelector(".wintext");
let newgame = document.querySelector(".newgame-btn");
let resetbtn = document.querySelector(".reset");

let count =0;
boxes.forEach(box=>{

  box.addEventListener("click",()=>{
    if(isO)
    {
      box.innerHTML = "O";
      isO=false;
    }
    else{
      box.innerHTML = "X";
      isO=true;
    }
    box.disabled = true;
    CheckWinner();
    count++;
    DrawGame();

  });
 

});

const CheckWinner = ()=>{
  
  for(pos of winpos)
  {
    let val1 = boxes[pos[0]].innerText;
    let val2 = boxes[pos[1]].innerText;
    let val3 = boxes[pos[2]].innerText;

    if(val1!="" && val2!="" && val3!="")
    {
      if(val1===val2 && val2===val3)
      {
       ShowWinner(val1);
      }
    }


  }


}
const ShowWinner = (e)=>{
  text.classList.remove("hide");
  text.innerText = `Winner is ${e}`;
  DisableClick();

}

const EnableClick = ()=>{

  for(box of boxes)
  {
    box.disabled = false;
  
  }


}
const DisableClick = ()=>{

  for(box of boxes)
  {
    box.disabled = true;
  }

}
const Reset = ()=>{
  for(box of boxes)
  {
    box.innerText = "";
  }
  EnableClick();

}
const NewGame = ()=>{
  Reset();
  text.classList.add("hide");
}

resetbtn.addEventListener("click",Reset);
newgame.addEventListener("click",NewGame);

const DrawGame = ()=>{

  if(count>=9)
  {
    text.innerText = "Game Draw! Start new Game";

  }


}