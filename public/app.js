


fetch('/new').then((res)=>{
    return res;
}).then((data)=>{
    var result = document.getElementById('result');
    if(result){
        result.appendChild('');
        for (var i=0; i<10; i++)
        {
       
            data[i].title = res[i].title;
            data[i].url = res[i].url;
            var label = document.createElement('label'); 
            var link = document.createElement('link');   
            label.innerHTML = data[i].title; 
            link.innerHTML = data[i].url;
            result.appendChild(label); 
            result.appendChild(link); 
        }
    }
});

fetch('/lifestyle').then ((res)=>{
    return res.json();
}).then((data)=>{
    
});

fetch('/football').then ((res)=>{
    return res.json();
}).then((data)=>{
    
});

fetch('/buisness').then ((res)=>{
    return res.json();
}).then((data)=>{
    
});

fetch('/tech').then ((res)=>{
    return res.json();
}).then((data)=>{
    
});


