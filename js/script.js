//random backgroud color
const button = document.querySelector('button');
const body = document.querySelector('body');
const currentColor = ['rgb(153, 204, 255)', 'rgb(255, 0, 102)',
    'rgb(204, 255, 51)', 'rgb(255, 255, 102)', 'rgb(204, 255, 221)',
    'rgb(204, 204, 255)'
];
body.style.backgroundColor = 'rgb(255, 204, 217)';
button.addEventListener('click', changeColor);

function changeColor() {
    const colorIndex = Math.floor(Math.random() * (currentColor.length + 1));
    body.style.backgroundColor = currentColor[colorIndex];
}