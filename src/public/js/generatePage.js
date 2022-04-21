class Gallery {
    constructor(target, array) {
        this.target = target;
        this.array = array;
    }
    generate() {
        let element = document.getElementById(this.target)
        element.getElementsByTagName("div")[0].innerHTML = `<h2>${this.array.title}</h2><p>${this.array.desc}</p>`
        for (let index in this.array.gallery) {
            element.getElementsByTagName("div")[1].innerHTML +=
            `<div class="col-md-2"><a target="_blank" title="${index}"` +
            `href="${this.array.gallery[index].href}"><img src="${this.array.gallery[index].src}">` +
            `<p>${this.array.gallery[index].desc}</p></a></div>`;
        }
    }
}
