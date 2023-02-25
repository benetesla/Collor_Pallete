const refresh = document.querySelector('.Refresh-btn');
const container = document.querySelector('.container');
const maxPaletBoxes = 32;
const generatePalete = () => {
    for (let i = 0; i < maxPaletBoxes; i++) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        randomColor = `#${randomColor.padStart(6, '0')}`;

        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `<div class="rect-box" style="background-color: ${randomColor}"></div>
        <div class="color-code">${randomColor}</div>`;
        container.appendChild(color);
        
    } 
};

refresh.addEventListener('click', generatePalete);