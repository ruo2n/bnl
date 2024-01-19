function gestionClicBoutonInfo() {
    $('div.informations > p, div.informations > h1').fadeOut('slow').fadeIn('slow');
    $('button.infos > i.fa-fan').addClass('fa-spin');
    setTimeout(function () {
        $('button.infos > i.fa-fan').removeClass('fa-spin');
    }, 500);
}

function gestionClicBoutonModeSombre() {
    var corps = $('body');
    var bouton = $('body > button');
    if (corps.hasClass('sombre')) {
        corps.removeClass('sombre');
        bouton.hide().html('<i class="far fa-moon"></i>').fadeIn('fast');
    } else {
        corps.addClass('sombre');
        bouton.hide().html('<i class="fas fa-moon"></i>').fadeIn('fast');
    }
}

function initAnimationTyped() {
    var typed = new Typed('.typedjs', {
        strings: ['"À jour" est la <span class="couleur">meilleure chose</span> que vous puissiez être.'],
        typeSpeed: 50,
        contentType: 'html',
        startDelay: 0,
        onComplete: function () {
            $('button.infos > i.fa-fan').removeClass('fa-spin');
        }
    });
}

$(document).ready(function () {
    $('button.infos').on('click', gestionClicBoutonInfo);

    $('body > button').on('click', gestionClicBoutonModeSombre);

    initAnimationTyped();
});

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    gestionClicBoutonModeSombre();
}
