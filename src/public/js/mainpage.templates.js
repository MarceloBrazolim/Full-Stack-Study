const head_page = 0;
const nav_page = 0;
// Mainpage default
document.getElementById("mainpage_table").innerHTML='<div class="row-md-12"><h2>Home Page</h2></div><div class="mainpg_cont_home row"><div><img src="./img/spongebob-dance.gif" alt="a"></div></div>';
// Sidebar default
document.getElementById("start").innerHTML='<span class="head active" onclick="hed(0)">Home</span><span class="head" onclick="hed(1)">My CV</span><span class="head" onclick="hed(2)">Social</span>'

function hed(n) { // Header button resetter
    let elem = document.querySelectorAll(".head")
    for (let index = 0; index < elem.length; index++) {
        document.getElementById("start").getElementsByTagName("span")[index].classList.remove("active");
    }
    select(elem, n);
    head_page_selector(n);
}
function nav(n) { // Sidebar button resetter
    let elem = document.querySelectorAll(".nav")
    for (let index = 0; index < elem.length; index++) {
        document.getElementById("sidebar_bottom").getElementsByTagName("li")[index].classList.remove("active");
    }
    select(elem, n);
    nav_page_selector(n)
}

function select(elem, index) { // Highlights buttons
    elem[index].classList.add("active");
}
function nav_page_selector(index) {
    switch (index) {
        case 0:
            var htmlcontent = '<div class="row-md-12"><h2>Home Page</h2></div><div class="mainpg_cont_home row"><div><img src="./img/spongebob-dance.gif" alt="a"></div></div>';
            break;
        case 1:
            var htmlcontent = '<div class="row-md-12"><h2>Home Page</h2></div><div class="mainpg_cont_home row"><div><img src="./img/dudu.jpg" alt="a"></div></div>';
        break;
    }
    document.getElementById("mainpage_table").innerHTML=htmlcontent
}