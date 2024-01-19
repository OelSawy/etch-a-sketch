const container = document.querySelector('.container');

var grids = [];

function initializeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        grids.push([]);
        for (let j = 0; j < gridSize; j++) {
            let div = document.createElement('div');
            let opacity = 0;
            div.style.height = 960 / gridSize + 'px';
            div.style.width = 960 / gridSize + 'px';
            div.style.border = '1px solid black';
            div.style.opacity = 0.1;
            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = selectRandomValue();
                opacity += 0.1;
                div.style.opacity = opacity
            });
            grids[i].push(div);
        }
    }

    for (let i = 0; i < gridSize; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'row');
        for (let j = 0; j < gridSize; j++) {
            div.appendChild(grids[i][j]);
        }
        container.appendChild(div);
    }
}

function selectRandomValue() {
    let list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let randomValue = '#';
    for (let i = 0; i < 6; i++) {
        randomValue += list[Math.floor(Math.random()*16)];
    }
    return randomValue;
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    grids.forEach((grid) => {
        grid.forEach((div) => {
            div.style.backgroundColor = 'white';
        });
    });
});

const resize = document.querySelector('#resize');
resize.addEventListener('click', () => {
    let newSize = prompt('Enter new size: ');
    if (parseInt(newSize) > 100) {
        alert('Size set to maximum which is 100');
        newSize = "100";
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    grids = [];
    newSize = parseInt(newSize);
    initializeGrid(newSize);
});

document.addEventListener("DOMContentLoaded", initializeGrid(4));