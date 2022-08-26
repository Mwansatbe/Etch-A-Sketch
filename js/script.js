// Select target element
const container = document.querySelector(".grid-container");
console.log(container);

// Creates the grid
function makeGrid(rows, columns){
let num =1;
for(let i =0; i<(rows * columns); i++){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    const gridItem= document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.innerText='';
    console.log(gridItem)
    container.appendChild(gridItem);
    gridItem.addEventListener("mouseover", ()=>{
        gridItem.style.backgroundColor="black";
    })

}
}
makeGrid(16,16)

let value1='';
function getUserInput(){
   value1=parseInt(prompt("Enter number of rows between 1 to 99 inclusive"));
   if((value1!=Number(value1))){
       value1=null;
       makeGrid(16,16)

       alert("Please enter a valid number");
   }
   if(value1>=100){
       alert("Please enter valid number");
       value1=null;
       makeGrid(16,16)
   }
}

getUserInput();