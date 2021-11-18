var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('name');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=60442978a2ab29de03399296c31fa7c2')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];

        name.innerHTML =nameValue
        temp.innerHTML =tempValue
    })
})

// function fetchData() {
//     fetch('httpsapi.openweathermap.org/data/2.5/weather?q={city name}&appid=f6b7ecdadfb9fdb78df7401efa2f5c50')
// }



