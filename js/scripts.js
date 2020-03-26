$(document).ready(function(){
  var height = parseInt(prompt("How tall are you? Please enter your height in inches: "));

  if (height < 55) {
    $('.too-short').show();
  } else if (height > 55) {
    $('.tall-enough').show();
  } else if (height >= 70) { 
    $('.too-tall').show();
  } else {
    $('.tall-enough');
  }
  
  console.log(height);
  
});