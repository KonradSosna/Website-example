
// hover letters color red
var redletters = document.querySelectorAll('.hover-red');
redletters.forEach(function (redletters_item) {

        redletters_item.addEventListener("mouseover", function (event) {
            event.target.style.color = "#cc3333";
        })

        redletters_item.addEventListener("mouseout", function (event) {
            event.target.style.color = "";
        })
})


// slider
var timer1, timer2, timer3 = 0;

function next() {
    clearTimeout(timer1);
    clearTimeout(timer2);
    hide();
    timer3 = setTimeout("slider()", 500);
};
function previous() {
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer -= 2;
    hide();
    timer3 = setTimeout("slider()", 500);
};
function change(nr) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nr - 1;
    hide();
    timer3 = setTimeout("slider()", 500);
};

var numer = 0;
function hide() {
    $("#preview").stop();
    $("#preview").fadeOut(500);
};

function slider() {
    clearTimeout(timer3);
    numer++;
    if (numer > 6) numer = 1;
    else if (numer < 1) numer = 6;
    var plik = "<img src=\"img/gun-" + numer + ".png\"  alt=\"paintball gun\" />";
    document.getElementById("preview").innerHTML = plik;
    $("#preview").fadeIn(500);

    timer1 = setTimeout("slider()", 5000);
    timer2 = setTimeout("hide()", 4500);
    };

window.addEventListener("load", slider());


// Button Scrol
var btn = $('#button2');
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

// Scroll to top
var scrollToTopBtn = document.getElementById("button2");
var rootElement = document.documentElement;
function scrollToTop() {

    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)

// Counter
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var number = document.getElementById('number');

plus.addEventListener("click", () => {
    number.value = parseInt(number.value) + 1;
})

minus.addEventListener("click", () => {
    number.value = parseInt(number.value) - 1;
    if (number.value < 0) number.value = 0;
})


// Dropdown Questions
function openQuestion1() {
    document.getElementById('dropdownq1').classList.toggle("show");
};
document.getElementById('question1').addEventListener("click", openQuestion1);

function openQuestion2() {
    document.getElementById('dropdownq2').classList.toggle("show");
};
document.getElementById('question2').addEventListener("click", openQuestion2);

function openQuestion3() {
    document.getElementById('dropdownq3').classList.toggle("show");
};
document.getElementById('question3').addEventListener("click", openQuestion3);

function openQuestion4() {
    document.getElementById('dropdownq4').classList.toggle("show");
};
document.getElementById('question4').addEventListener("click", openQuestion4);


// Hover red line
var parent = document.querySelectorAll('.menu');
parent.forEach(function (parent_item) {
    parent_item.addEventListener("mouseover", function () {

        parent_item.classList.add("active");

    })
    parent_item.addEventListener("mouseout", function () {

        parent.forEach(function (parent_item) {
            parent_item.classList.remove("active");
        })

    })
})

var parent2 = document.querySelectorAll('.right_container a');
parent2.forEach(function (parent_item) {

    parent_item.addEventListener("mouseover", function () {
        parent_item.classList.add("active2");
    })

    parent_item.addEventListener("mouseout", function () {
        
            parent_item.classList.remove("active2");
        

    })
})


// Option menu
var select = document.getElementById("barrelLength");
var options = ["130 cm", "140 cm", "150 cm", "160 cm", "170cm"];
for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
