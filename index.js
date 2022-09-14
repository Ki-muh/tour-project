const submit = document.getElementById('btn')
// let postFeedback = document.getElementById('post')
// let feedbackList = document.getElementById('recents')
// let postInput = document.getElementsByClassName('textarea')

//addEventListener to book button
document.getElementById('btn').addEventListener('submit', e => {
    e.preventDefault()
     alert('Booking Was Successful!')
    form.reset()
})


// //addEvent listener to submit feedback button
postFeedback.addEventListener('submit', function() {
    let list = document.createElement('li')
    list.innerText = postInput.target.value
    feedbackList.appendChild(list)
    postInput.reset()
})

//fetching
fetch('http://localhost:3000/geonames')
.then(response => response.json())
.then(data => {
    console.log(data.name)
    // let placesData = ''
    // data.map(values => {
    //     placesData +=
    //     '<option>`{values.City}`</option>'
    // document.getElementById('places').innerHTML = placesData
    // })
    // .catch(err => console.log(err))
})