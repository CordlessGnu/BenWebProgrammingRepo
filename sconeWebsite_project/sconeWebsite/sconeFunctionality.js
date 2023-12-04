
function changeSconeImg() {

    const imageSrc = document.getElementById("changeyScone").src
    const imageName = imageSrc.split("/").slice(3).join("/")
    
    var uncutScone = "sconeNonCut.jpg";
    var halfScone = "sconeInHalf.jpg";
    var madeScone = "sconeMade.png";
    var finishedScone = "sconeFinished.jpg";


    if (imageName == uncutScone) 
    {
        document.getElementById("changeyScone").src = halfScone;
    } 
    else if(imageName == halfScone) 
    {
        document.getElementById("changeyScone").src = madeScone;
    } 
    else 
    {
        document.getElementById("changeyScone").src = finishedScone;
    }
}