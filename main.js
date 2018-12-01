
function openTab(evt, tabTitle) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabTitle).style.display = "block";
    evt.currentTarget.className += " is-active";
    // if (tabTitle == "client"){
    //     document.getElementById("c").style.backgroundColor="#fff";

    // }
    // else{
    //   //  document.getElementById("c").style.backgroundColor="#";
    // }
}

document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    document.getElementById("client").style.display = 'block';
});