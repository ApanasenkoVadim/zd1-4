let numbers = Array.from({length: 30}, () => Math.floor(Math.random() * 100));
let table = document.getElementById("randomTable");
let index = 0;

for (let i = 0; i < 5; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
        let cell = document.createElement("td");
        cell.textContent = numbers[index];
        row.appendChild(cell);
        if (numbers[index] >= 50) {
            cell.style.backgroundColor = "green";
        }
        index++;
    }
    table.appendChild(row);
}

function addNumber() {
    let newNumber = Math.floor(Math.random() * 100);
    numbers.push(newNumber);
    let rowIndex = Math.floor((index % 30) / 6);
    let cellIndex = (index % 30) % 6;
    let cell = table.rows[rowIndex].cells[cellIndex];
    cell.textContent = newNumber;
    if (newNumber >= 50) {
        cell.style.backgroundColor = "green";
    } else {
        cell.style.backgroundColor = "";
    }
    index++;
}



const menuItems = document.querySelectorAll('.menu li');
    
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();

        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        } else {
            const link = item.querySelector('a');
            if (link && link.href) {
                window.location.href = link.href;
            }
        }
    });
});
    
document.addEventListener('click', (e) => {
    menuItems.forEach(item => {
        const submenu = item.querySelector('.submenu');
        if (submenu && submenu.style.display === 'block' && !item.contains(e.target)) {
            submenu.style.display = 'none';
        }
    });
});




const slider = document.querySelector('.slider');
const handle = document.querySelector('.slider-handle');
const value = document.querySelector('.slider-value');
let isDragging = false;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  updateSlider(e);
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    updateSlider(e);
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

function updateSlider(e) {
  const sliderRect = slider.getBoundingClientRect();
  let x = e.clientX - sliderRect.left;
  x = Math.max(0, x);
  x = Math.min(sliderRect.width, x);

  handle.style.left = `${x - 10}px`;

  const percent = x / sliderRect.width;
  const range = 100;
  const val = Math.round(percent * range);

  value.textContent = val;
}

document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}