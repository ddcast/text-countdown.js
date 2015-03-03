# text-countdown.js

Simple jQuery Relative Time Countdown Plugin

## Demo
http://jsfiddle.net/ddcast/NQa9U/

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
  $('.countdown-timer').textCountdown();
</script>
```

Output looks something like:

```
The sale starts in about 6 days and 3 hours. Hooray!
```

Yes, you can style the output to your heart's content.

```html
<div class="text-countdown-container">
  <span class="text-countdown-prefix">The sale starts in</span>
  <span class="text-countdown-about">about</span>
  <span class="text-countdown-days">
    <span class="text-countdown-num">6</span>
    <span class="text-countdown-label">days</span>
  </span>
  <span class="text-countdown-delimiter">and</span>
  <span class="text-countdown-remainder">
    <span class="text-countdown-lessthan">less than</span>
    <span class="text-countdown-num">3</span>
    <span class="text-countdown-label">hours</span>
  </span>
  <span class="text-countdown-suffix">. Hooray!</span>
</div>
```
