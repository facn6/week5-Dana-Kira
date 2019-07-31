
function renderHTML(data){
    var result = document.getElementById('result');
    for(let i=0;i<data.length;i++){
        var card=document.createElement('div');
        card.setAttribute('class','card');
        card.setAttribute('id',i);
        data[i].webTitle = res[i].webTitle;
        data[i].webUrl = res[i].webUrl;
        var label = document.createElement('label'); 
        var link = document.createElement('link');   
        label.innerHTML = data[i].webTitle; 
        link.innerHTML = data[i].webUrl;
        card.appendChild(label); 
        card.appendChild(link); 
        result.appendChild(card);
    }
}
module.exports= renderHTML;