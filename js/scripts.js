$(document).ready(function(){
  //functions for index.html
  if ($('#superSecret')) {
    var height = parseInt(prompt("How tall are you? Please enter your height in inches: "));
  }
  if (height < 55) {
    $('.too-short').show();
  } else if (height >= 70) {
    $('.too-tall').show();
  } else if (height > 55) {
    $('.tall-enough').show();
  } else {
    $('.tall-enough').show();
  }
   
});