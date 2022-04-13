function block()
 {
     document.getElementById("links_container").style.display= "block";
    } 


function unblock()
{
  document.getElementById("links_container").style.display= "none";
}


function navbar_release () 
{
  if (document.getElementById("links_container").style.display= "none")
    {
      block();
    } else {
      unblock();
    }
}


