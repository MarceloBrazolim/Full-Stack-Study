function nav(n) {
    let elem = document.querySelectorAll(".nav_li")
    for (let index = 0; index < elem.length; index++) {
        document.getElementById("sidebar_bottom").getElementsByTagName("li")[index].classList.remove("active");
    }
    select(n, elem);
    nav_page_selector(n)
}
function select(index, elem) {
    elem[index].classList.add("active");
}
document.getElementById("mainpage_table").innerHTML='<div class="row-md-12"><h2>Home Page</h2></div><div class="mainpg_cont_home row"><div><img src="./img/spongebob-dance.gif" alt="a"></div></div>';
function nav_page_selector(index) {
    switch (index) {
        case 0:
            document.getElementById("mainpage_table").innerHTML='<div class="row-md-12"><h2>Home Page</h2></div><div class="mainpg_cont_home row"><div><img src="./img/spongebob-dance.gif" alt="a"></div></div>';
            break;
        case 1:
            document.getElementById("mainpage_table").innerHTML='<div class="row-md-12"><h2>Home Page</h2></div><div class="mainpg_cont_home row"><div><img src="./img/dudu.jpg" alt="a"></div></div>';
            break;
    
        default:
            break;
    }
}