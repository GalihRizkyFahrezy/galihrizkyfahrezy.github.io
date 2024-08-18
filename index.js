var overview = document.getElementById("content-overview");
var biodata = document.getElementById("content-biodata");
var skill = document.getElementById("content-skill");
var portofolio = document.getElementById("content-portofolio");



document.getElementById("button-overview").onclick = function()
{
    overview.style.display = "block";
    biodata.style.display = "none";
    skill.style.display = "none";
    portofolio.style.display = "none";
}

document.getElementById("button-biodata").onclick = function()
{
    overview.style.display = "none";
    biodata.style.display = "block";
    skill.style.display = "none";
    portofolio.style.display = "none";
}

document.getElementById("button-skill").onclick = function()
{
    overview.style.display = "none";
    biodata.style.display = "none";
    skill.style.display = "block";
    portofolio.style.display = "none";
}

document.getElementById("button-portofolio").onclick = function()
{
    overview.style.display = "none";
    biodata.style.display = "none";
    skill.style.display = "none";
    portofolio.style.display = "block";
}
