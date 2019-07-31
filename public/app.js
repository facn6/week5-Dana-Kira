
function getSelectValue() {
  const selectedValue = document.getElementById('list').value;
  console.log(selectedValue);
  fetch(`/${selectedValue}`).then(res => res.json()).then((data) => {
    const result = document.getElementById('result1');

    for (let i = 0; i < data.length; i++) {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('id', i);


      const label = document.createElement('label');
      label.innerHTML = data[i].webTitle;
      card.appendChild(label);
      const link = document.createElement('a');
      link.href = data[i].webUrl;
      link.innerHTML = 'Read The Article Online';
      card.appendChild(link);

      result.appendChild(card);
    }
  });
}
