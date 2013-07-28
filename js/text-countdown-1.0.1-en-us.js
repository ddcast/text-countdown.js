/* ==========================================================
 * text-countdown.js v1.0.0
 * https://github.com/ddcast/text-countdown.js
 * ==========================================================
 * Copyright 2013, Devin Castro
 * Plugin-style influenced by Twitter Bootstrap (Twitter, Inc.)
 * Dual licensed under MIT or GPL (v2) licenses.
 * http://en.wikipedia.org/wiki/MIT_License
 * http://www.gnu.org/licenses/gpl-2.0.html
 * ========================================================== */
 
(function ($) {
  "use strict";

  function TextCountdown (element, options) {
    this.options = options;

    this.init('textCountdown', element, this.options);
  }

  TextCountdown.prototype = {
    constructor: TextCountdown,
    init: function (type, element) {
      var $element = this.$element = $(element),
          date = this._getDate(), html;

      this.date = this._getDateProps(date);

      if (this.date.hours > 0) {
        html = $.fn[type]._getHTML.apply(this);

        $element.html(html);
      }

      return;
    },
    _getDateProps: function (date) {
      var props = {};

      props.until = this._until(date);
      props.hours = Math.ceil(props.until / 3600000);
      props.days = props.hours && Math.floor(props.hours / 24);
      props.remainder = (props.hours > -1 || 0) && props.hours - (props.days * 24);

      props.styleLessthan = props.until > 3600000 && 'display: none;' || '';
      props.styleAbout = !props.styleLessthan && 'display: none;' || '';
      props.styleDays = props.days < 1 && 'display: none;' || '';
      props.styleRemainder = props.remainder < 1 && 'display: none;' || '';

      props.plurDays = props.days > 1 && 's' || '';
      props.plurRemainder = props.remainder > 1 && 's' || '';

      return props;
    },
    detach: function () {
      this.data('textCountdown', null);

      return;
    },
    _getDate: function () {
      var dateStr = [this._pad(this.options.month), this._pad(this.options.day), this._pad(this.options.year)].join('/'),
          timeStr = [this._pad(this.options.hour), this._pad(this.options.minute), this._pad(this.options.second)].join(':'),
          date = [dateStr, timeStr, 'UTC'].join(' ');

      date = new Date(date);

      if (!date.valueOf()) {
        throw new Error('Invalid date');
      }

      return date;
    },
    _pad: function (str, max) {
      return (str + '').length < max && this._pad('0' + str, max) || str;
    },
    _until: function (date) {
      var local = new Date(),
          until = date.getTime() - local.getTime();

      return until;
    }
  };
 
  $.fn.textCountdown = function (option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('textCountdown'),
          options = $.extend({}, $.fn.textCountdown.defaults, $this.data(), typeof option == 'object' && option);
      options.classPrefix += 'text-countdown-';
      if (!data) {
        $this.data('textCountdown', (data = new TextCountdown(this, options)));
      } else {
        $.extend(data.options, options);
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.textCountdown.defaults = {
    classPrefix: '',
    prefix: '',
    suffix: '',
    delimiter: '',
    hour: 0,
    minute: 0,
    seconds: 0
  };

  $.fn.textCountdown.Constructor = TextCountdown;

}(window.jQuery));

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
