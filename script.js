let username = prompt('What is your Name!?');
let gender = prompt('What is your characters gender');
let adj1b = prompt('Give an adjective');
let n1b = prompt('Give a Noun');
let v1b = prompt('Give a Verb');
let adj2b = prompt('Give an adjective');
let n2b = prompt('Give a Noun');
let v2b = prompt('Give a Verb');
let n3b = prompt('Give a Noun');
let v3b = prompt('Give a Verb');




let beg = `<p> Once upon a time, in a ${adj1b} village, there lived a ${n1b} named ${username}. Every day, ${username} would ${v1b} around the village, dreaming of ${n2b}. One morning, ${username} received an unexpected letter that said, “You have been chosen to ${v2b} the legendary ${n2b}!” Excited, ${username} packed ${gender} ${adj2b} backpack and set off on a journey to find the ${n3b}, determined to ${n3b} it.`;





document.getElementById('beginning').innerHTML = beg;
document.getElementById('story').innerHTML = myStory;
