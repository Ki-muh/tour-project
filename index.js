//fetch api
function fetchPlaces() {  
    fetch("https://zoo-animal-api.herokuapp.com/")
      .then((resp) => resp.json())
      .then((json) => getPlaces(json));
  }
  
  function getPlaces(places) {
    const main = document.querySelector('main');
    places.forEach(places => {
      const div = document.createElement('div');
      div.innerHTML = places.name;
      main.appendChild(div)[10];
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    getPlaces();
  });

//added event listener
document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => alert('Booking Successful!'));
});

