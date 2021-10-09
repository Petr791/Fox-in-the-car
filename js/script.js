window.onload = function() {

    document.addEventListener('click', moveActions);
    //Actions (делегирование события click)
    function moveActions(e) {

        const targetElement = e.target;
        if (targetElement.classList.contains('button3')) {
            document.querySelector('#bS').classList.toggle('anim-1');
            document.querySelector('#sharf-2').classList.toggle('animate');
            document.querySelector('#weel-2').classList.toggle('animWeels-2');
            document.querySelector('#weel-1').classList.toggle('animWeels-1');

        }

    }

}


/* var btn = $('#button3'),
    btn2 = $('#button4');

btn.on('click', function() {
    $('#bS').toggleClass('anim-1');
    $('#sharf-2').toggleClass('animate');
    $('#weel-2').toggleClass('animWeels-2');
    $('#weel-1').toggleClass('animWeels-1');
}); */
/* btn2.on('click', function() {
    $('#weel-2').toggleClass('animWeels-2');
    $('#weel-1').toggleClass('animWeels-1');

}); */



go();
window.addEventListener('resize', go);

function go() {
    document.querySelector('.width').innerText = document.documentElement.clientWidth;
    document.querySelector('.height').innerText = document.documentElement.clientHeight;
}