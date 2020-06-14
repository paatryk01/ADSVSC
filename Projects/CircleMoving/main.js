const circle = $('.circle');
const info = $('.info');
const box = $('.box');

$(box).on('click', function(){
    $(this).animate({'opacity': '0'});
});

const move = (e) => {
    console.log(e.keyCode);
    const circleLeft = circle.offset().left;
    const circleTop = Math.ceil(circle.offset().top);
    

    switch(e.keyCode) {
        case 37: 
            $(circle).css('left', '-=5');
            $(info).text(`x value = ${circleLeft} y value = ${circleTop}`)
            break;
        case 38:
            $(circle).css('top', '-=5');
            $(info).text(`x value = ${circleLeft} y value = ${circleTop}`)
            break;
        case 39: 
            $(circle).css('left', '+=5');
            $(info).text(`x value = ${circleLeft} y value = ${circleTop}`)
            break;
        case 40:
            $(circle).css('top', '+=5');
            $(info).text(`x value = ${circleLeft} y value = ${circleTop}`)
            break;
        case 32:
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            $(circle).css("background", `rgb(${r}, ${g}, ${b})`);
    }
}


$(window).keydown(move);