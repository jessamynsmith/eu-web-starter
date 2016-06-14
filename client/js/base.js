$(document).ready(function() {
  $('form').submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    console.log("form was submitted!");
  });
});
