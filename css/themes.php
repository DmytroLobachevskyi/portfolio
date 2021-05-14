<?php
session_start();

if(isset($_GET["theme"]))
{
    $theme = $_GET["theme"];

    if($theme == "dark" || $theme == "light")
    {
   	 $_SESSION["theme"] = $theme;
    }
}
?>