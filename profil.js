
document.addEventListener('DOMContentLoaded', function () {
   var input = document.getElementById('dropdown1');
   if (localStorage['dropdown1']) { // if job is set
       input.value = localStorage['dropdown1']; // set the value
   }
   input.onchange = function () {
        localStorage['dropdown1'] = this.value; // change localStorage on change
    }



});

document.addEventListener('DOMContentLoaded', function () {
   var input = document.getElementById('dropdown2');
   if (localStorage['dropdown2']) { // if job is set
       input.value = localStorage['dropdown2']; // set the value
   }
   input.onchange = function () {
        localStorage['dropdown2'] = this.value; // change localStorage on change
    }
});


function validate()
{
    if(   document.getElementById("usrnm").value == "workshop"
       && document.getElementById("psw").value == "workshop" )
    {
window.location.replace("profil.html");
    }
    else
    {
    

    }
}
