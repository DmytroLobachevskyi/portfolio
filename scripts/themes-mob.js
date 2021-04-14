var btn = document.getElementById("theme-button-mob");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let darkTheme = "css/dark.css";
    let lightTheme = "css/light.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == darkTheme)
    {
   	 currTheme = lightTheme;
   	 theme = "light";
    }
    else
    {    
   	 currTheme = darkTheme;
   	 theme = "dark";
    }

    link.setAttribute("href", currTheme);

}