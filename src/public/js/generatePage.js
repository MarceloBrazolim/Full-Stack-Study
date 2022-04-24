class Page {
    constructor(target, array) {
        this.target = target;
        this.array = array;
    }
    generate() {
        let element = document.getElementById(this.target)
        element.getElementsByTagName("div")[0].innerHTML = '' +
        `<h2>${this.array.title}</h2>` +
        `<p>${this.array.desc}</p>` +
        `<hr>`

        let typeCheck;
        for (let index in this.array.gallery) {
            typeCheck = [`a target="_blank" href="${this.array.gallery[index].href}"`, 'a'];
            if (this.array.gallery[index].type == 'video') {
                this.array.gallery[index].type += ` onClick="playPause('${index}')"`;
                typeCheck = ['font', 'font'];
            }
            if (this.array.gallery[index].hover === undefined) {
                this.array.gallery[index].hover = '';
            }

            element.getElementsByTagName("div")[1].innerHTML +=
            `<div class="col-md-2"><div title="${this.array.gallery[index].hover}"><${typeCheck[0]}>` +
            `<span>${this.array.gallery[index].desc}</span><${this.array.gallery[index].type} id="${index}" src="${this.array.gallery[index].src}">` +
            `</${typeCheck[1]}><p>${this.array.gallery[index].title}</p></div></div>`;
        }
    }
}

function playPause(index) {
    let myVideo = document.getElementById(index);
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
}
