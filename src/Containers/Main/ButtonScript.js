function ClickJoin() {
    document.getElementById("JoinBoxContainer").style.display = "flex";
    document.getElementById("JoinBoxContainer").style.justifyContent = "center";
    document.getElementById("JoinBoxContainer").style.alignItems = "center";
    document.getElementById("JoinBoxContainer").style.flexDirection = "column";
    document.getElementById("Header").style.display = "none";
    document.getElementById("Text").style.display = "none";
    document.getElementById("ButtonContainer1").style.display = "none";
    document.getElementById("Logo").style.display = "none";
}
function JoinBack() {
    document.getElementById("JoinBoxContainer").style.display = "none";
    document.getElementById("Header").style.display = "unset";
    document.getElementById("Text").style.display = "unset";
    document.getElementById("Logo").style.display = "unset";
    document.getElementById("ButtonContainer1").style.display = "flex";
}

function ClickAsk() {
    DisplayDate();
    Service();
    document.getElementById("AskBoxContainer").style.display = "flex";
    document.getElementById("AskBoxContainer").style.justifyContent = "center";
    document.getElementById("AskBoxContainer").style.alignItems = "center";
    document.getElementById("AskBoxContainer").style.flexDirection = "column";
    document.getElementById("Header").style.display = "none";
    document.getElementById("Text").style.display = "none";
    document.getElementById("ButtonContainer1").style.display = "none";
    document.getElementById("Logo").style.display = "none";
}
function AskBack() {
    document.getElementById("AskBoxContainer").style.display = "none";
    document.getElementById("Header").style.display = "unset";
    document.getElementById("Text").style.display = "unset";
    document.getElementById("Logo").style.display = "unset";
    document.getElementById("ButtonContainer1").style.display = "flex";
}
function DisplayDate() {
    document.getElementById("Time").innerHTML = Date();
}
function Service() {
    let d = new Date();
    if (d.getFullYear() === 2021) {
        if (d.getMonth() === 9) {
            if (d.getDay() > 21 && d.getDay() < 27 && d.getDay() !== 24) {
                if (d.getHours() > 19 && d.getHours() < 22) {
                    document.getElementById("Service").innerHTML = "營業中";
                    document.getElementById("Gather").style.display = "unset";
                } else {
                    document.getElementById("Service").innerHTML = "休息中";
                    document.getElementById("Gather").style.display = "none";
                }
            } else {
                document.getElementById("Service").innerHTML = "休息中";
                document.getElementById("Gather").style.display = "none";
            }
        } else {
            document.getElementById("Service").innerHTML = "休息中";
            document.getElementById("Gather").style.display = "none";
        }
    } else {
        document.getElementById("Service").innerHTML = "休息中";
        document.getElementById("Gather").style.display = "none";
    }
}
