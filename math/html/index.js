function problem(x) {
    var e = document.getElementById("p" + x);
    if (e.style.display == "block") {
        e.style = "display: none;";
    } else {
        e.style = "display: block;";
    }
}

function solution(x) {
    var e = document.getElementById("s" + x);
    if (e.style.display == "block") {
        e.style = "display: none;";
    } else {
        e.style = "display: block;";
    }
}
