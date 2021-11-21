var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('name');
var temp = document.querySelector('.temp');
var display = document.querySelector('.display');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=60442978a2ab29de03399296c31fa7c2')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        console.log(data)

        name.innerHTML =nameValue
        temp.innerHTML =tempValue



    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=60442978a2ab29de03399296c31fa7c2`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        display.innerHTML= '';
    for(let i = 1; i < 6; i++){
        let date= new Date(data.daily[i].dt*1000)
        let dateString = date.toGMTString();
        console.log(data.daily[i].dt*1000)
        display.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Date:${dateString}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> `;
        
    }

        }) .catch(error => {
            console.log(error)
        })
})
})

// function fetchData() {
//     fetch('httpsapi.openweathermap.org/data/2.5/weather?q={city name}&appid=f6b7ecdadfb9fdb78df7401efa2f5c50')
// }


