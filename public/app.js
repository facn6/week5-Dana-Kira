
function getSelectValue()
{
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue);
    fetch(`/${selectedValue}`).then((res)=>{
        return res.json();
    }).then((data)=>{
        var result = document.getElementById('result1');

        for(let i=0;i<data.length;i++){
            var card=document.createElement('div');
            card.setAttribute('class','card');
            card.setAttribute('id',i);
           
            
            var label = document.createElement('label'); 
            label.innerHTML = data[i].webTitle; 
            card.appendChild(label);
            var link = document.createElement('a'); 
            link.href = data[i].webUrl;
            link.innerHTML ='Read The Article Online';
            console.log("link" , link);
            card.appendChild(link); 

            result.appendChild(card);
        } 
    });
}




