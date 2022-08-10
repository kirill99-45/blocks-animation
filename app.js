const wrapper = document.querySelector('.wrapper');
const COUNT_DIGIt = 400;

const colors = ['#05386B', '#F64C72', '#3500D3', '#950740', '#FFE400'
, '#DA7B93', '#2A1B3D', '#17E9E0', '#86C232']

for (let i = 0; i < COUNT_DIGIt; i++) {
  const box = document.createElement('div')
  box.classList.add('box')
  wrapper.append(box)

  box.addEventListener('mouseover', () => setRandomColor(box));
  box.addEventListener('mouseleave', () => removeColor(box));
}

function setRandomColor(element) {
  let index = Math.floor(Math.random() * colors.length);

  element.style.background = `${colors[index]}`;
  element.style.boxShadow = `0px 0px 2px ${colors[index]}
  0px 0px 2px ${colors[index]}`;
}

function removeColor(element) {
  element.style.background = 'black';
  element.style.boxShadow = '0px 0px 2px black'
}
