// function hed(n) { // Header button resetter
//     let elem = document.querySelectorAll(".head")
//     for (let index = 0; index < elem.length; index++) {
//         document.getElementById("start").getElementsByTagName("span")[index].classList.remove("active");
//     }
//     select(elem, n);
//     head_page_selector(n);
// }
// function select(elem, index) { // Highlights buttons
//     elem[index].classList.add("active");
// }

// Mainpage default
document.getElementById("mainpage_content").innerHTML='<div class="row-md-12"><h2>Home Page</h2></div><div class="mainpg_cont_home row"><div><img src="./img/spongebob-dance.gif" alt="a"></div></div>';
function page_nav(index) {
    switch (index) {
        case 'home':
            var htmlcontent = '<div class="row-md-12"><h2>Home Page</h2></div><div class="mainpg_cont_home row"><div><img src="./img/spongebob-dance.gif" alt="a"></div></div>';
            break;
        case 'puts':
            var htmlcontent = '<div class="row-md-12"><h2>Puts</h2></div><div class="mainpg_cont_home row"><div><img src="./img/dudu.jpg" alt="a"></div></div>';
            break;
        case 'mycv':
            var htmlcontent = '<div class="row-md-12"><h2>My Curriculum Vitae</h2></div><div class="mainpg_cont_cv row"><div><embed src="../../database/CVMarceloMarchezini.pdf" type="application/pdf"></div></div>'
            break;
        case 'forum':
            htmlcontent = '<div class="row-md-12"><h2>Forum</h2></div><div class="mainpg_cont_gallery row"><div class="col-md-2"><a href=""><img src="./img/silvio.jpg"><p>Super Silvio</p></a></div><div class="col-md-2"><a href=""><img src="./img/joao.jpg"><p>Joao de Ferro</p></a></div><div class="col-md-2"><a href=""><img src="./img/neymar.jpg"><p>Neymar da Sociedade</p></a></div><div class="col-md-2"><a href=""><img src="./img/geraldo.jpg"><p>Geraldo Prodigio</p></a></div><div class="col-md-2"><a href=""><img src="./img/fausto.jpg"><p>Faustchoji</p></a></div><div class="col-md-2"><a href=""><img src="./img/madruga.jpg"><p>Wolvedruga</p></a></div></div><div class="mainpg_cont_gallery row"><div class="col-md-2"><a href=""><img src="./img/malandro.jpg"><p>Serginho de Preto</p></a></div><div class="col-md-2"><a href=""><img src="./img/tiririca.jpg"><p>Tiririca Aranha</p></a></div></div>'
            break;
    }
    document.getElementById("mainpage_content").innerHTML=htmlcontent;
}