/* JavaScript File */

/* Scrolling Effect */
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
    if(document.body.scrollTop > 830 || document.documentElement.scrollTop > 830) 
    {
        document.getElementById("scrollTop").style.display = "block";
    }
    else
    {
        document.getElementById("scrollTop").style.display = "none";
    }
}
function onTop() 
{
    document.body.scrollTop = 10;
    document.documentElement.scrollTop = 0;
}