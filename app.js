//grabbing all the json data 
fetch('data.json')
.then(response =>  response.json())
.then(json => {

    //calling all the json data to put into innerHTML 

    var container = document.querySelector('.reportgrid');
    
    function display(){
    container.innerHTML = "";
    
    json.forEach((item) => {
        var card = `

        
        <div class="reportcard ${item.class}">

        <div class="reporttotal">

        <div class="reportflex">
        <h1>${item.title}</h1>
        <img src="./images/icon-ellipsis.svg">
        </div>

        
        <div class="reporttime">

       
        <h1 class="daily">${item.timeframes.daily.current}hrs</h1>
        <p class="daily">Last Week - ${item.timeframes.daily.previous}</p>


<h1 class="weekly">${item.timeframes.weekly.current}hrs</h1>
        <p class="weekly">Last Week - ${item.timeframes.weekly.previous}</p>


        <h1 class="monthly">${item.timeframes.monthly.current}hrs</h1>
        <p class="monthly">Last Week - ${item.timeframes.monthly.previous}</p>

     
        </div>

        </div>

        </div>
        
        `
        container.innerHTML += card;
    })
    
    }
    
    display(json);
});

//option buttons

var routine = document.querySelector('.routine');

routine.addEventListener('click', e => {
    if(e.target.className == "monthlybtn"){
        var month = document.querySelectorAll('.monthly');
        var weekly = document.querySelectorAll('.weekly');
        var daily = document.querySelectorAll('.daily');
        
        
        for(var i=0; i<month.length; i++){
            month[i].style.display="flex"
        }
        for(var i=0; i<daily.length; i++){
            daily[i].style.display="none"
        }
        for(var i=0; i<weekly.length; i++){
            weekly[i].style.display="none";
        }
    }
    
    else if(e.target.className == "dailybtn"){
        var month = document.querySelectorAll('.monthly');
        var weekly = document.querySelectorAll('.weekly');
        var daily = document.querySelectorAll('.daily');
        
        
        for(var i=0; i<month.length; i++){
            month[i].style.display="none"
        }
        for(var i=0; i<daily.length; i++){
            daily[i].style.display="flex"
        }
        for(var i=0; i<weekly.length; i++){
            weekly[i].style.display="none"
            
        }
    }
    else if(e.target.className == "weeklybtn"){
        var month = document.querySelectorAll('.monthly');
        var weekly = document.querySelectorAll('.weekly');
        var daily = document.querySelectorAll('.daily');
        
        
        for(var i=0; i<month.length; i++){
            month[i].style.display="none"
        }
        for(var i=0; i<daily.length; i++){
            daily[i].style.display="none"
        }
        for(var i=0; i<weekly.length; i++){
            weekly[i].style.display="flex"
        }
    }
})



