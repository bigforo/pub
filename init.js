    $(document).ready(function () {
        if (navigator.userAgent.match(/Android/i)) {
            window.scrollTo(0, 1);
        }
        $('#bs0').backslider({
            mode: 'timer',
            effect: 'slidefade',
            effectTime: 3000,
            photoSource: 'picasa',
            centerImages: true,
            timer: 10000,
            picasaQuery: {
                user: '112973260543911044435',
                album: '6014979933820203569'
            }
        });
        

        addEventListener("click", function () {
            var
                  el = document.documentElement
                , rfs =
                       el.requestFullScreen
                    || el.webkitRequestFullScreen
                    || el.mozRequestFullScreen;
            rfs.call(el);
        });

        $('body').on("click", function () {
            var el = document.documentElement, rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
            rfs.call(el);
        });

    });
