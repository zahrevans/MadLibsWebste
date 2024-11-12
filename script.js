let username = prompt('What is your Name!?')
let userQuest = prompt('What is your quest?')
let userFavColor = prompt('What is your favorite color?')
let swallowAirSpeed = prompt('What is the air speed of an unlaiden swallow')


let myStory = `<p> Hello ${username}. Answer me these questions <span class=loud> three </span>, and the other side you'll see.</p>

<p> i see you have already answered, so your quest is to ${userQuest}</p>`


document.getElementById('story').innerHTML = myStory