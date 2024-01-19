function gererClicBoutonInfo() {
    $('div.informations > p, div.informations > h1').fadeOut('slow').fadeIn('slow');
}

function gererClicBoutonModeSombre() {
    var corps = $('body');
    if (corps.hasClass('sombre')) {
        corps.removeClass('sombre');
        $('body > button > i').removeClass("fas").addClass("far");
    } else {
        corps.addClass('sombre');
        $('body > button > i').removeClass("far").addClass("fas");
    }
}

function initialiserAnimationTyped() {
    var typed = new Typed('.typedjs', {
        strings: ['"À jour" est la <span class="couleur">meilleure chose</span> que vous puissiez être.'],
        typeSpeed: 50,
        contentType: 'html',
        startDelay: 0
    });
}

$(document).ready(function () {
    $('button.infos').on('click', gererClicBoutonInfo);
    $('body > button').on('click', gererClicBoutonModeSombre);
    initialiserAnimationTyped();
});

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    gererClicBoutonModeSombre();
}
