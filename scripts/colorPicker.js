/*
  ********
  Adding this comment so I can commit this file with
  the correct commit message to say I finished the
  Pivotal Tracker story (conversion to pbyl)

  Because the story id was missing a number on the last
  commit (6709a61)
*/

// Add event listener for when the form (.rbgConverter)
// is submitted
document.querySelector(".rgbConverter").addEventListener("submit", function(e) {

  // This keeps the page from refreshing since
  // I don't actually need to send form data
  e.preventDefault();

  var rgbRed = Number(document.querySelector("#redRGB").value);
  var rgbGreen = Number(document.querySelector("#greenRGB").value);
  var rgbBlue = Number(document.querySelector("#blueRGB").value);

  function validateRGB() {

    // long if statement to check if any of the 
    // RGB inputs are less than 0 or greater than 1
    if (rgbRed < 0 || rgbRed > 1 || rgbGreen < 0 || rgbGreen > 1 || rgbBlue < 0 || rgbBlue > 1) {

      return false;

    } else { 

      return true;

    }
  }

  if (validateRGB()) {

    var luminance = Math.max(rgbRed, rgbGreen, rgbBlue);

    var pyblResult = document.querySelector("#newPYBL");

    var pyblRed, pyblGreen, pyblBlue = 0;
    var rgbTotal = rgbRed + rgbGreen + rgbBlue;

    // Convert rgb values to pybl values
    pyblRed = (rgbRed / rgbTotal).toFixed(2);
    pyblGreen = (rgbGreen / rgbTotal).toFixed(2);
    pyblBlue = (rgbBlue / rgbTotal).toFixed(2);

    // Edit square result box to display pybl values
    pyblResult.innerHTML = "&rho;&gamma;&beta;L(" + pyblRed + ", " + pyblGreen + ", " + pyblBlue + ", " + luminance + ")";

    // Edit square box to have chosen color as background
    pyblResult.style.backgroundColor = "rgb(" + (rgbRed * 255) + ", " + (rgbGreen * 255) + ", " + (rgbBlue * 255) + ")";

    // Edit text color of pybl value depending on luminance
    if (luminance >= 0.7) {
      pyblResult.style.color = "black";
    } else {
      pyblResult.style.color = "white";
    }

  } else { // one of the rgb inputs is not valid
    alert("Please enter values between 0 and 1.");
  }

})