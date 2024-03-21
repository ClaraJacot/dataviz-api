function afficherBackgroud1() {
        div = document.getElementById("backg1");
        let i = 0;
        let images = ['./images/img2.jpg', './images/img3.jpg', './images/img4.jpg', './images/img5.jpg'];
        setInterval(function () {
                div.style.backgroundImage = `url(${images[i]})`;
                i++;
                if (i == images.length) {
                        i = 0;
                }
        }, 3000);
}

afficherBackgroud1();

function afficherBackgroud2() {
        div2 = document.getElementById("backg2");
        let i = 0;
        let images = ['./images/img7.jpg', './images/img8.jpg', './images/img9.jpg', './images/img10.jpg'];
        setInterval(function () {
                div2.style.backgroundImage = `url(${images[i]})`;
                i++;
                if (i == images.length) {
                        i = 0;
                }
        }, 3000);
}

afficherBackgroud2();

function afficherBackgroud3() {
        div3 = document.getElementById("backg3");
        let i = 0;
        let images = ['./images/img17.jpg', './images/img18.jpg', './images/img19.jpg'];
        setInterval(function () {
                div3.style.backgroundImage = `url(${images[i]})`;
                i++;
                if (i == images.length) {
                        i = 0;
                }
        }, 3000);
}

afficherBackgroud3();

function afficherBackgroud4() {
        div4 = document.getElementById("backg4");
        let i = 0;
        let images = ['./images/img12.jpg', './images/img13.jpg', './images/img14.jpg', './images/img15.jpg'];
        setInterval(function () {
                div4.style.backgroundImage = `url(${images[i]})`;
                i++;
                if (i == images.length) {
                        i = 0;
                }
        }, 3000);
}

afficherBackgroud4();