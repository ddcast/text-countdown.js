(function ($) {
  "use strict";

  $.fn.textCountdown._getHTML = function () {
    var html = '<div class="' + this.options.classPrefix + 'container">' + 
      '<span class="' + this.options.classPrefix + 'prefix">' + this.options.prefix + '</span>' +
      '<span class="' + this.options.classPrefix + 'about" style="' + this.date.styleAbout + '">about</span> ' +
      '<span class="' + this.options.classPrefix + 'days" style="' + this.date.styleDays + '">' +
      '<span class="' + this.options.classPrefix + 'num">' + this.date.days + '</span> ' +
      '<span class="' + this.options.classPrefix + 'label">day' + this.date.plurDays + '</span></span>' +
      '<span class="' + this.options.classPrefix + 'delimiter" style="' + ( this.date.styleDays || this.date.styleRemainder ) + '">' + this.options.delimiter + '</span> ' +
      '<span class="' + this.options.classPrefix + 'remainder" style="' + this.date.styleRemainder + '">' +
      '<span class="' + this.options.classPrefix + 'lessthan" style="' + this.date.styleLessthan + '">less than</span> ' +
      '<span class="' + this.options.classPrefix + 'num">' + this.date.remainder + '</span> ' +
      '<span class="' + this.options.classPrefix + 'label">hour' + this.date.plurRemainder + '</span></span>' +
      '<span class="' + this.options.classPrefix + 'suffix">' + this.options.suffix + '</span></div>';

    return html;
  };

}(window.jQuery));
