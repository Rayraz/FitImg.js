/*global jQuery */
/*!
 * FitImg.js 1.0
 *
 * Copyright 2014, Ruben Vreeken https://github.com/rayraz
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <Ruben Vreeken> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return
 * ----------------------------------------------------------------------------
 *
 * Date: Wo May 07 13:06:00 2014 +0200
 */

(function($) {

  $.fn.fitImg = function(options) {
    return this.each(function() {
      var tmpImg, $img = $(this), $parent = $img.parent(), settings;

      tmpImg     = new Image();
      tmpImg.src = this.src;

      settings = $.extend({
        'nativeWidth': tmpImg.width,
        'nativeHeight': tmpImg.height,
        'minHeight': 0,
        'maxHeight': Number.POSITIVE_INFINITY,
        'align': "center"
      }, options);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = $.debounce(function() {
        var bounds = {}, ratio = settings.nativeWidth / settings.nativeHeight, overflow;

        bounds.width  = Math.max($parent.width(), settings.minHeight * ratio);
        bounds.width  = Math.min(bounds.width, settings.maxHeight * ratio);
        bounds.height = bounds.width / ratio;

        if(bounds.width > $parent.width()) {
          overflow = bounds.width - $parent.width();
          switch(settings.align) {
            case 'left':
              bounds.marginRight = -overflow + 'px';
              break;
            case 'center':
              bounds.marginLeft  = -(overflow / 2) + 'px';
              bounds.marginRight = -(overflow / 2) + 'px';
              break;
            case 'right':
              bounds.marginLeft = -overflow + 'px';
              break;
          }
        }

        bounds.width  = bounds.width + 'px';
        bounds.height = bounds.height + 'px';

        $img.css(bounds);
      }, 50);

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fitimg orientationchange.fitimg', resizer);

    });

  };

})(jQuery);