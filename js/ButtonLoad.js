$(document).ready(() => {
    function closeAllFire() {
            document.getElementById("fireSTTrinkets").style.display = "none";
            document.getElementById("fireSTTalents").style.display = "none";
            document.getElementById("fire2TTrinkets").style.display = "none";
            document.getElementById("fire2TTalents").style.display = "none";
            document.getElementById("fire4TTrinkets").style.display = "none";
            document.getElementById("fire4TTalents").style.display = "none";
    }
    $("#fireSTBtn").click(() => {
    closeAllFire(); 
            document.getElementById("fireSTTrinkets").style.display = "block";
            document.getElementById("fireSTTrinkets").style.display = "block";
        });
    }