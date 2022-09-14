//form submission
const bookingForm = document.getElementById('fill');

bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    bookingForm.reset();
    alert('Booking Successful!');
});

//adding feedback
const postButton = document.getElementById('post');
const feedbackList = document.getElementById('list');
const inputFeedback = document.getElementById('feedback');

postButton.addEventListener('click', function() {
    let list = document.createElement('p');
    list.style = 'color: whitesmoke';
    list.innerText = inputFeedback.value;
    feedbackList.appendChild(list);
});

//fetching
document.addEventListener('DOMContentLoaded', () => {
    const places = document.getElementById('places');

    fetch('https://restcountries.com/v3.1/all')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let output = '';
        data.forEach(country => {
            output += `<option>${country.capital}</option>`;
        });

        places.innerHTML = output;
    })
    .catch(err => {
        console.log(err);
    });
});