window.onscroll = function() {
  navDisplay()
}

function navDisplay() {
  const browserHeight = window.innerHeight;
  const scrollHeight = document.documentElement.scrollTop;
  if (scrollHeight + 54 >= browserHeight) {
    document.getElementById("nav-span").style.top = "0px";
  } else {
    document.getElementById("nav-span").style.top = "-200px";
  }
}

//
//
//


function circleColor() { // Function that generates random color hex values
  let letters = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * 16)];
  }
  return hex;
}

function circleSize() {
  let circleSize = (Math.floor(Math.random() * 80) + 30);
  return circleSize + "px"
}

function drawCircles(event) {
  let circle = document.createElement('div'); // Creates a new <div> element
  circle.setAttribute('id', 'circle'); // Assigns the CSS 'circle' id attributes to the new <div> element
  document.getElementById("background").appendChild(circle); // Adds the new <div> element to the body of the HTML
  circle.style.left = event.clientX + 'px'; // Sets the X-axis value of the <div> as equal to the X-axis value of the mouse's position
  circle.style.top = (event.clientY ) + 'px'; // Sets the Y-axis value of the <div> as equal to the Y-axis value of the mouse's position
  circle.style.backgroundColor = circleColor(); // Set the circle's border color equal to the color variable defined above
  circle.style.transition = 'all 0.9s ease-out 0.05s' // Animation parameters
  circle.style.left = circle.offsetLeft  + 'px' // Centers the circle under the mouse
  circle.style.top = circle.offsetTop  + 'px' // Centers the circle under the mouse
  circle.style.width = circleSize() // New width
  circle.style.height = circle.style.width // New height
  circle.style.opacity = 0 // Fades out circles
  setTimeout(function() { circle.remove() }, 2000); // Removes circles from DOM after 2s, to keep resources from overloading
}

document.onmousemove = drawCircles; // Execute the animateCircles function when mouse position is changing



//
//
//

//
//
// function starPosition(event) {
//   var letters = '0123456789ABCDEF';
//   var hex = '#';
//   for (var i = 0; i < 6; i++) {
//     hex += letters[Math.floor(Math.random() * 16)];
//   }
//   return hex;
// }
//
// xPos += Math.floor(Math.random() * 2400);
// box-shadow: 2125px 1979px #FFF
//
//
// function animateSky(event) {
//   let sky = document.createElement('div'); // Creates a new <div> element
//   let color = colorsArray[Math.floor(Math.random() * colorsArray.length)] // Pull a random color from colorsArray
//   circle.setAttribute('id', 'circle'); // Assigns our CSS 'circle' id attributes to the new <div> element
//   document.getElementById("landing-container").appendChild(circle); // Adds the new <div> element to the body of the HTML
//   circle.style.left = event.clientX + 'px'; // Sets the X-axis value of the <div> as equal to the X-axis value of the mouse's position
//   circle.style.top = (event.clientY+ 64) + 'px'; // Sets the Y-axis value of the <div> as equal to the Y-axis value of the mouse's position
//   circle.style.backgroundColor = circleColor(); // Set the circle's border color equal to the color variable defined above
//   circle.style.transition = 'all 0.9s ease-out 0.05s' // Animation parameters
//   circle.style.left = circle.offsetLeft  + 'px' // Centers the circle under the mouse
//   circle.style.top = circle.offsetTop  + 'px' // Centers the circle under the mouse
//   circle.style.width = '100px' // New width
//   circle.style.height = '100px' // New height
//   circle.style.opacity = 0 // Fades out circles
// }
//
// window.onload = animateSky; // Execute the animateCircles function when mouse position is changing
