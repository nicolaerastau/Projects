$(document).ready(function() {

 // When you click on a football-box, call function toggleClass
$(".football-box").click(function(){
       toggleClass(this, 'active');
   });
   
   function toggleClass(el, newClass){
      var allClasses = el.className;
      if (allClasses.indexOf(newClass) > -1){
        el.className = allClasses.replace(newClass, "");
      } else {
        el.className = allClasses + " " + newClass;
      }
   }
});
