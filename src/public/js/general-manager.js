let inner, pageArray;
page_nav("gallery"); // Default page
function page_nav(index) {
    switch (index) {
        case 'home':
            pageTitle = 'Home Page'
            inner = '<div class="mainpg_cont_home row-md-12"><img class="float-left" src="./img/me.jpg"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dicta, beatae optio modi molestiae veritatis ex quas mollitia neque, ipsum animi deleniti sed iure praesentium pariatur nam, laborum sint ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis voluptatem nemo quam nesciunt fugiat doloribus? Tempore, asperiores minima hic quam, animi pariatur error optio, quidem fugit veritatis rem fuga? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis numquam minus quo, voluptate id nihil doloremque similique expedita nostrum totam quis reiciendis ad, dolore pariatur itaque dolor illo, dignissimos officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam aspernatur laborum quasi, optio sint aliquid ipsam vitae sed expedita similique, perferendis nobis asperiores praesentium. Autem ea suscipit mollitia maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo eveniet molestias eligendi quos recusandae! Laborum quisquam molestias blanditiis sit impedit perspiciatis saepe, vero ipsa quis ipsam odit ullam quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dicta, beatae optio modi molestiae veritatis ex quas mollitia neque, ipsum animi deleniti sed iure praesentium pariatur nam, laborum sint ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis voluptatem nemo quam nesciunt fugiat doloribus? Tempore, asperiores minima hic quam, animi pariatur error optio, quidem fugit veritatis rem fuga? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis numquam minus quo, voluptate id nihil doloremque similique expedita nostrum totam quis reiciendis ad, dolore pariatur itaque dolor illo, dignissimos officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam aspernatur laborum quasi, optio sint aliquid ipsam vitae sed expedita similique, perferendis nobis asperiores praesentium. Autem ea suscipit mollitia maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo eveniet molestias eligendi quos recusandae! Laborum quisquam molestias blanditiis sit impedit perspiciatis saepe, vero ipsa quis ipsam odit ullam quibusdam.<img class="float-right" src="./img/sidebar_banner.jpg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dicta, beatae optio modi molestiae veritatis ex quas mollitia neque, ipsum animi deleniti sed iure praesentium pariatur nam, laborum sint ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis voluptatem nemo quam nesciunt fugiat doloribus? Tempore, asperiores minima hic quam, animi pariatur error optio, quidem fugit veritatis rem fuga? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis numquam minus quo, voluptate id nihil doloremque similique expedita nostrum totam quis reiciendis ad, dolore pariatur itaque dolor illo, dignissimos officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam aspernatur laborum quasi, optio sint aliquid ipsam vitae sed expedita similique, perferendis nobis asperiores praesentium. Autem ea suscipit mollitia maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo eveniet molestias eligendi quos recusandae! Laborum quisquam molestias blanditiis sit impedit perspiciatis saepe, vero ipsa quis ipsam odit ullam quibusdam.</p></div><br><div class="mainpg_cont_gallery row"><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div><div class="col-md-2"><a href=""><img src="./img/a.jpg"><p>test</p></a></div></div>';
            overwriteMainPage(inner)
            break;
        case 'puts':
            pageTitle = 'Puts'
            inner = '<div class="row-md-12"><h2>Puts</h2></div><div class="mainpg_cont_home row"><div><img src="./img/dudu.jpg" alt="a"></div></div>';
            overwriteMainPage(inner)
            break;
        case 'mycv':
            pageTitle = ``
            inner = '' +
            `<div class="row-md-12">` +
                `<h2>My Curriculum Vitae</h2>` +
            `</div>` +
            `<div class="mainpg_cont_cv row">` +
                `<div>` +
                    `<embed src="../../database/CVMarceloMarchezini.pdf" type="application/pdf">` +
                 `</div>` +
            `</div>`
            overwriteMainPage(inner)
            break;
        case 'gallery':
            pageArray = galleryContent;
            inner = '' +
            `<div class="row-md-12 mainpg-bg">` +
            `</div>` +
            `<div id="cont_gallery" class="mainpage row">` +
            `</div>`
            overwriteMainPage(inner);
            let myGallery = new Page('mainpage_content', pageArray);
            myGallery.generate();
            break;
        }
        document.title = `${pageArray.pageTitle}`;
}

function overwriteMainPage(inner) {
    document.getElementById("mainpage_content").innerHTML=inner;
}