//addEventListener
document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('btn')
    btn.addEventListener ('click', () => alert('Congratulations! Booking was Successful.'))


    //submit comment button
    let button = document.getElementById('comment')
    comment.addEventListener('submit', e => {
        e.preventDefault()
        let addComment = document.getElementById('comment').value
        console.log(addComment)
        document.reset()
    })
})

//remove the destination button
document.getElementById('places').remove('button');
