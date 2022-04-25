class Page {
    constructor(target, array) {
        this.target = target;
        this.array = array;
    }
    generate() {
        let content = this.array.gallery;
        let element = document.getElementById(this.target)
        document.title = `${this.array.pageTitle}`
        console.log(document.title);
        element.getElementsByTagName("div")[0].innerHTML = '' +
        `<h2>${this.array.title}</h2>` +
        `<p>${this.array.desc}</p>` +
        `<hr>`

        let typeCheck;
        for (let index in content) {
            typeCheck = [`a target="_blank" href="${content[index].href}"`, 'a', ''];
            if (content[index].type == 'video') {
                content[index].type += ` loop onClick="playPause('${index}')"`;
                typeCheck = ['font', 'font', `<i class="fa-solid fa-play" onclick="playPause('${index}')"></i>`];
            }
            if (content[index].hover === undefined) {
                content[index].hover = '';
            }

            element.getElementsByTagName("div")[1].innerHTML +=
            `<div class="col-md-2">` +
                `<div id="${index}" title="${content[index].hover}">` +
                    `<${typeCheck[0]}>` +   // <a>
                        `<span>${content[index].desc}</span>` +
                        `${typeCheck[2]}` +   // <i>
                        `<${content[index].type} src="${content[index].src}">` +    // img / video
                    `</${typeCheck[1]}>` +  // </a>
                    `<p>${content[index].title}</p>` +
                `</div>` +
            `</div>`;
        }
    }
}

function playPause(index) {
    let myDiv = document.getElementById(index);
    let myVideo = myDiv.getElementsByTagName('video')[0]
    let videoButton = myDiv.getElementsByTagName('i')[0]
    if (myVideo.paused) {
        myVideo.play();
        videoButton.classList.add('fa-pause', 'active')
        videoButton.classList.remove('fa-play')
    } else {
        myVideo.pause();
        videoButton.classList.remove('fa-pause', 'active')
        videoButton.classList.add('fa-play')
    }
}
