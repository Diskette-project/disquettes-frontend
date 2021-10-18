/**
 * letteranimation.js
 * https://www.cssanimatio.io
 * Created and maintained by: Pavel
 * Find me at: https://www.linkedin.com/in/yesiamrocks/
 * Email: hello@cssanimation.io
 * Github: https://github.com/yesiamrocks/cssanimation.io
 * Title: CSS Animation Library for Developers and Ninjas
 * Copyright (c) 2017 Pavel
 * License: cssanimattion is licensed under the MIT license
 **/

window.onload = function() {
    animateSequence();
    animateRandom();
};

function animateSequence() {
    var a = document.getElementsByClassName('sequence');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 0;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 15;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}