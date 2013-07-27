# sale-countdown.js

Simple jQuery Relative Time Countdown Plugin

## Get Started
Input date timezone is UTC. Output is localized.

```html
<div class="countdown-timer"
  data-month="7"
  data-day="4"
  data-year="2013"
  data-hour="17"
  data-prefix="The sale starts in"
  data-suffix=". Hooray!"
  data-delimiter="and"
></div>

<script>
  $('.countdown-timer').saleCountdown();
</script>
```

Output looks something like:

```
The sale starts in 6 days and 3 hours. Hooray!
```

Yes, you can style the output to your heart's content.

```html
<div class="sale-countdown-container">
  <span class="sale-countdown-prefix">The sale starts in</span>
  <span class="sale-countdown-days">
    <span class="sale-countdown-num">2</span>
    <span class="sale-countdown-label">days</span>
  </span>
  <span class="sale-countdown-delimiter">and</span>
  <span class="sale-countdown-remainder">
    <span class="sale-countdown-num">13</span>
    <span class="sale-countdown-label">hours</span>
  </span>
  <span class="sale-countdown-suffix">. Hooray!</span>
</div>
```