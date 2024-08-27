var overview = document.getElementById("content-overview");
var about = document.getElementById("content-about");
var portofolio001 = document.getElementById("portofolio001");
var portofolio = document.getElementById("portofolio002");



document.getElementById("button-overview").onclick = function()
{
    overview.style.display = "block";
    about.style.display = "none";
    portofolio001.style.display = "none";
    portofolio.style.display = "none";
}

document.getElementById("button-about").onclick = function()
{
    overview.style.display = "none";
    about.style.display = "block";
    portofolio001.style.display = "none";
    portofolio.style.display = "none";
}

document.getElementById("button-portofolio001").onclick = function()
{
    overview.style.display = "none";
    about.style.display = "none";
    portofolio001.style.display = "block";
    portofolio.style.display = "none";
}

document.getElementById("button-portofolio002").onclick = function()
{
    overview.style.display = "none";
    about.style.display = "none";
    portofolio001.style.display = "none";
    portofolio.style.display = "block";
}