function home_page() {
    document.getElementById("mainpage_table").innerHTML='<div class="row-md-12"><h2>Home Page</h2></div><div class="mainpg_cont_home row"><div><img src="./img/spongebob-dance.gif" alt="a"></div></div>'
    document.getElementById("sidebar_bottom").innerHTML='<ul><li on onclick="home_page()">Home Page</li><li>ipsum</li><ul><li>dolor</li><li>sit</li><li>amet</li></ul><li>consectetur</li><li>adipisicing</li><li>elit</li><ul><li>Vitae</li><li>eaque</li></ul><li>eiciendis</li><ul><li>ex</li></ul></ul><hr class="hr_contrast">'
}