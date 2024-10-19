function getValues(){
    var currentUrl = new URL(window.location.href);
    var params = new URLSearchParams(currentUrl.search);
    var param1 = params.get('referer');
    var param2 = params.get('link');
    return [param1, param2];
}
function back(){
    document.location.href = getValues()[0]
}
function next(){
    document.location.href = getValues()[1]
}
const shorterUrl = getValues()[1].split("//")[1].split("/")[0]
document.getElementById("message").innerText = "Are you sure you recognize: " + shorterUrl + "?";