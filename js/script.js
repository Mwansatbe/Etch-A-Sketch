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
