function navDisplay() { // Determines when navigation bar is visible
  const browserHeight = window.innerHeight; // Set variable for web browser's height
  const scrollHeight = document.documentElement.scrollTop; // Set variable for current scroll position on page
  if (scrollHeight + 200 >= browserHeight) { // If the user has scrolled down beyond the height of their browser...
    document.getElementById("nav-span").style.top = "0px"; // Set position of navigation bar to the top of the browser window (visible)
  } else { // If user has not scrolled beyond the height of their browser...
    document.getElementById("nav-span").style.top = "-200px"; // Set position of navigation bar outside of browser window (not visible)
  }
}

function circleColor() { // Set color of circle
  let colors = ["#1B4F72", "#21618C", "#2874A6", "#2E86C1", "#3498DB", "#5DADE2", "#85C1E9", "#AED6F1", "#D6EAF8", "#EBF5FB",
  "#154360", "#1A5276", "#1F618D", "#2471A3", "#2980B9", "#5499C7", "#7FB3D5", "#A9CCE3", "#D4E6F1", "#EAF2F8"] // Color palette array
  let indexValue = (Math.floor(Math.random() * 20)) // Generate random number between 0 and 20
  return colors[indexValue] // Pull a random color value from the array
}

function circleSize() { // Set size of circle
  let circleSize = (Math.floor(Math.random() * 70) + 10); // Generate random number between 10 and 70
  return circleSize + "px" // Return circle size
}

function circlePosition() { // Set position of circle
  let circlePosition = (Math.floor(Math.random() * 40) - 20); // Generate random number between -20 and 20
  return circlePosition // Return circle position
}

// function circleOpacity() { // Set opacity of circle
//   let circleOpacity = (Math.floor(Math.random() * 100)); // Generate random number between 0 and 100
//   return "0." + circleOpacity // Return circle opacity
// }

function drawCircles(event) {
  let circle = document.createElement('div'); // Assign circle variable
  circle.setAttribute('id', 'mouse-draw'); // Assigns the CSS 'mouse-draw' id attributes to the new <div> element
  document.getElementById("background").appendChild(circle); // Adds the new <div> element to the 'background' id in the HTML
  circle.style.left = event.clientX + circlePosition() + 'px'; // Sets the X-axis value of the <div> as equal to the X-axis value of the mouse's position, offset plus or minus by the amount determined by circlePosition()
  circle.style.top = (event.clientY ) + circlePosition() + 'px'; // Sets the Y-axis value of the <div> as equal to the Y-axis value of the mouse's position, offset plus or minus by the amount determined by circlePosition()
  // circle.style.opacity = circleOpacity(); // Set the circle's opacity
  circle.style.backgroundColor = circleColor(); // Set the circle's border color equal to the color variable defined above
  circle.style.transition = 'all 0.9s ease-out 0.05s' // Animation parameters
  circle.style.left = circle.offsetLeft + 'px' // Centers the circle under the mouse
  circle.style.top = circle.offsetTop + 'px' // Centers the circle under the mouse
  circle.style.width = circleSize() // Set circle width from circleSize() function
  circle.style.height = circle.style.width // Set circle height as equal to width, to ensure a circle and not an ellipse
  circle.style.opacity = 0 // Fades out circles
  setTimeout(function() { circle.remove() }, 1000); // Removes circles from DOM after 1s, to keep resources from overloading
}

window.onscroll = function() { // navDisplay() function will be run as the user scrolls the page
  navDisplay()
}

document.onmousemove = drawCircles; // Execute the animateCircles function when user moves mouse
