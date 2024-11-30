//variables for beginning
let username = prompt('What is your Name!?');
let pron = prompt('He or She')
let adj1b = prompt('Give an adjective');
let n1b = prompt('Give a Noun');
let v1b = prompt('Give a Verb');
let adj2b = prompt('Give an adjective');
let n2b = prompt('Give a Noun');
let v2b = prompt('Give a Verb');
let n3b = prompt('Give a Noun');
let v3b = prompt('Give a Verb');



//Beginning paragraph
let beg = `<p> Once upon a time, in a ${adj1b} village, there lived a ${n1b} named ${username}. Every day, ${username} would ${v1b} around the village, dreaming of ${n2b}. One morning, ${username} received an unexpected letter that said, “You have been chosen to find the legendary ${n2b}!” Excited, ${username} packed their ${adj2b} backpack and set off on a journey to find the ${n3b}, determined to ${n3b} it.</p>`;

//middle variables
let adj1m = prompt('Give an Adjective');
let pn1m = prompt('Give a Plural Noun (an animal for a better story flow)');
let adj2m = prompt('Give an Adjective');
let adj3m = prompt('Give an Adjective');
let animal = prompt('Give an Animal');
let v1m = prompt('Give a Verb');
let n1m = prompt('Give a Noun');
let adj4m = prompt('Give an Adjective');

//middle pargraph
let mid = `<p> During the journey, ${username} faced many challenges. First, ${pron} had to cross a ${adj1m} river full of ${pn1m}. Then, ${username} found a ${adj2m} forest where a ${adj3m} ${animal} warned, “You must ${v1m} the ${n1m} or risk being trapped forever!” With quick thinking and a ${adj4m} spirit, ${username} managed to ${v1m} the danger and continue the quest. <p>`




document.getElementById('beginning').innerHTML = beg;
document.getElementById('middle').innerHTML = mid;
document.getElementById('end').innerHTML = end; 
document.getElementById('story').innerHTML = myStory;
