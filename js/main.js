// countdown

var countDownDate = new Date("May 15, 2018 15:37:25").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();


    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

        
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "We're ON";
    }
    }, 1000);


// On-click Animations

 document.querySelector('.flyRocket').addEventListener('click', animate1);

 function animate1(){
     document.getElementById('image').classList.add('rocketShake');
 };

 document.querySelector('#image').addEventListener('animationend', removeClass);
 function removeClass(){
     document.getElementById('image').classList.remove('rocketShake');
 }

//  Smoke

document.querySelector('.flyRocket').addEventListener('click', animate2);

 function animate2(){
     document.getElementById('smokeDiv').classList.add('rocketUp');
 };

 document.querySelector('#smokeDiv').addEventListener('animationend', removeClass2);

 function removeClass2() {
     document.getElementById('smokeDiv').classList.remove('rocketUp');
 }

// displaying form

 document.querySelector('#image').addEventListener('animationstart', displayForm);

 function displayForm(){
    document.getElementById('hidden1').classList.remove('hidden');
    document.getElementById('count1').style.display = 'none';
 }

//  Displaying form for Mobile

document.querySelector('#image').addEventListener('animationiteration', displayCard);

function displayCard(){
    document.getElementById('mars1').classList.remove('hiddenMars');
}