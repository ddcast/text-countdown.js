# sale-countdown.js

Simple Countdown in Relative Time

## Get Started
Input date timezone is UTC.

```html
<div class="countdown-timer"
	data-month="7"
	data-day="4"
	data-year="2013"
	data-hour="17"
	data-prefix="The sale starts in"
	data-suffix=". Hooray!"
></div>

<script>
	$('.countdown-timer').saleCountdown();
</script>
```

Output looks something like:

```
The sale starts in 6 days and 3 hours. Hooray!
```