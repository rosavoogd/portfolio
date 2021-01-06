 /* bron:w3schools */
 /* Als de gebruiker de muis er over hovert, execute myFunction */
 document.getElementById("myBtn").onclick = function() {
   myFunction()
 };

 /* myFunction toggles tussen adding en removing de class .show,
 die de contact content laat zien of verbergt */
 function myFunction() {
   document.querySelector(".contact").classList.toggle("show");
 }
