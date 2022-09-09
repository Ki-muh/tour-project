//addEventListener to book button
document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('btn')
    btn.addEventListener ('click', () => alert('Congratulations! Booking was Successful.'))
})

//addEvent listener to submit feedback button
const addFeedback = document.getElementById('feedback')
addFeedback.addEventListener('add', addAFeedback)
let addAFeedback = e => {
    e.preventDefault()
    newFeedback = e.target.value
    if(newFeedback !== '') {
        return newFeedback  
    }
}
//add newFeedback
const feedbackForm = getElementById('feedback-form')
feedbackForm.addEventListener('submit',submitFeedback);
const submitFeedback = (event) => {
    event.preventDefault();
    let newFeedbackAdded = document.createElement("li");
    newCommentItem.innerText = newFeedback;
    commentList.appendChild(newFeedbackAdded);
    feedbackInput.value = "";
}
//fetching
const getPlaces = document.getElementById('places')
function getPlaces() {
    fetch('')
}