

function getSelectValue() {
  const selectedValue = document.getElementById('list').value;
  console.log(selectedValue);
  fetch(`/${selectedValue}`).then(res => res.json()).then((data) => {
    renderHTML(data);
  });
}

getSelectValue();
function renderHTML(data) {
  const result = document.getElementById('result');
  for (let i = 0; i < 2; i++) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', i);
    const label = document.createElement('label');
    const link = document.createElement('link');
    label.innerHTML = data[i].webTitle;
    link.innerHTML = data[i].webUrl;
    card.appendChild(label);
    card.appendChild(link);
    result.appendChild(card);
  }
}
