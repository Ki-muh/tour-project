//addEventListener to book button
document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('btn')
    btn.addEventListener ('click', () => alert('Congratulations! Booking was Successful.'))
})

//addEvent listener to submit feedback button
feedbackInput.addEventListener('add', handleFeedback)
let feedback = ""
const handleFeedback = e => {
    e.preventDefault()
    feedback = e.target.value
    if (feedback !== "") {
        return feedback
    }
}

async function getPlaces(){
    let places = 'http://localhost:3000/geonames';
    try {
        let response = fetch(places,{
            method : 'GET'
        });
        return await (await response).json();
    }
    catch(error){
        console.log(error);
    }
}

init = () => getPlaces