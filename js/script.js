function gererClicBoutonInfo() {
    $('div.informations > p, div.informations > h1').fadeOut('slow').fadeIn('slow');
}

function gererClicBoutonModeSombre() {
    var corps = $('body');
    var bouton = $('body > button');
    if (corps.hasClass('sombre')) {
        corps.removeClass('sombre');
        button.hide().html('<i class="far fa-moon"></i>').fadeIn('fast');
    } else {
        corps.addClass('sombre');
        button.hide().html('<i class="fas fa-moon"></i>').fadeIn('fast');
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
