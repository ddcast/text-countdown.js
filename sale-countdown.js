/* ==========================================================
 * sale-countdown.js v1.0.0
 * https://github.com/ddcast/sale-countdown.js
 * ==========================================================
 * Copyright 2013, Devin Castro
 * Plugin-style influenced by Twitter Bootstrap (Twitter, Inc.)
 * Dual licensed under MIT or GPL (v2) licenses.
 * http://en.wikipedia.org/wiki/MIT_License
 * http://www.gnu.org/licenses/gpl-2.0.html
 * ========================================================== */

(function ($) {
  "use strict";

  function SaleCountdown (element, options) {
    this.options = options;

    this.init('countdown', element, this.options);
  }

  SaleCountdown.prototype = {
    constructor: SaleCountdown,
    init: function (type, element) {
      var $element = this.$element = $(element),
          date = this._getUTCDate(), props, html;

      props = this.date = this._getDateProps(date);

      if (props.hours > 0) {
        html = '<div class="' + this.options.classPrefix + 'container">' + 
          '<span class="' + this.options.classPrefix + 'prefix">' + this.options.prefix + '</span>' +
          '<span class="' + this.options.classPrefix + 'days" style="' + props.styleDays + '">' +
          '<span class="' + this.options.classPrefix + 'num">' + props.days + '</span> ' +
          '<span class="' + this.options.classPrefix + 'label">day' + props.plurDays + '</span></span>' +
          '<span class="' + this.options.classPrefix + 'delimiter" style="' + ( props.styleDays || props.styleRemainder ) + '">' + this.options.delimiter + '</span> ' +
          '<span class="' + this.options.classPrefix + 'remainder" style="' + props.styleRemainder + '">' +
          '<span class="' + this.options.classPrefix + 'num">' + props.remainder + '</span> ' +
          '<span class="' + this.options.classPrefix + 'label">hour' + props.plurRemainder + '</span></span>' +
          '<span class="' + this.options.classPrefix + 'suffix">' + this.options.suffix + '</span></div>';

        $element.html(html);
      }

      return;
    },
    _getDateProps: function (date) {
      var props = {};

      props.hours = this._hoursUntil(date);
      props.days = props.hours && Math.floor(props.hours / 24);
      props.remainder = (props.hours > -1 || 0) && props.hours - (props.days * 24);

      props.styleDays = props.days < 1 && 'display: none;' || '';
      props.styleRemainder = props.remainder < 1 && 'display: none;' || '';

      props.plurDays = props.days > 1 && 's' || '';
      props.plurRemainder = props.remainder > 1 && 's' || '';

      return props;
    },
    detach: function () {
      this.data('saleCountdown', null);

      return;
    },
    _getUTCDate: function () {
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
      max = max || 2;

      return (str + '').length < max && this._pad('0' + str, max) || str;
    },
    _hoursUntil: function (date) {
      var local = new Date(),
          hours = Math.ceil((date.getTime() - local.getTime()) / 3600000);

      return hours;
    }
  };
 
  $.fn.saleCountdown = function (option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('saleCountdown'),
          options = $.extend({}, $.fn.saleCountdown.defaults, $this.data(), typeof option == 'object' && option);
      options.classPrefix += 'sale-countdown-';
      if (!data) {
        $this.data('saleCountdown', (data = new SaleCountdown(this, options)));
      } else {
        $.extend(data.options, options);
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.saleCountdown.defaults = {
    classPrefix: '',
    prefix: '',
    suffix: '',
    delimiter: '',
    hour: 0,
    minute: 0,
    seconds: 0
  };

  $.fn.saleCountdown.Constructor = SaleCountdown;

}(window.jQuery));
