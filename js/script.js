const container = document.querySelector(".grid-container");
console.log(container);

function makeGrid(rows, columns){
let num =1;
for(let i =0; i<(rows * columns); i++){
    const gridItem= document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.innerText=num+i;
    console.log(gridItem)
    container.appendChild(gridItem);

}
}
makeGrid(16,16)
