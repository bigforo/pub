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

        $('#Gallery1').click(function () {
            $('#bs0').remove();
            $(document.body).append('<div id="bs0" class="backslider" style="z-index:-1;"></div>');
            $('#bs0').backslider({
                mode: 'timer',
                effect: 'slidefade',
                effectTime: 3000,
                photoSource: 'picasa',
                centerImages: true,
                timer: 10000,
                picasaQuery: {
                    user: '112973260543911044435',
                    album: '112973260543911044435'
                }
            });

        });
        $('#Gallery2').click(function () {
            $('#bs0').remove();
            $(document.body).append('<div id="bs0" class="backslider" style="z-index:-1;"></div>');
            $('#bs0').backslider({
                mode: 'timer',
                effect: 'slidefade',
                effectTime: 3000,
                photoSource: 'picasa',
                centerImages: true,
                timer: 10000,
                picasaQuery: {
                    user: '112973260543911044435',
                    album: '6027003481855779489'
                }
            });

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
