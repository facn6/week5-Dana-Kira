
const html =require('./renderDOM.js');

function getSelectValue()
{
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue);
    fetch('/' + selectedValue).then((res)=>{
        return res.json();
    }).then((data)=>{
    html.renderHTML(data);
    });
}



