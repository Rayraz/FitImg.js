# FitImg.js, a jQuery plugin for responsive resizing of images.

FitImg makes fluid images more robust by allowing a minimum and maximum height. Use this plugin on your responsive design to clip ratio-based resizing of your images to fixed limits.

## How it works
Here is a simple FitImg setup:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="jquery.fitimg.js"></script>
<script>
  jQuery("#responsive_image").fitImg({
    'minHeight:' 240,
    'maxHeight:' 640
  });
</script>
```

Your image should now fluidly resize, to cover the full width of it's container, while remaining at least 240px tall, and growing to taller than 640px;

## Alignment

Once your image hits the configured height limit, FitImg will align it within it's container element. You can align the image to the left, right or horizontal center of the container using the `align` option.

````javascript
jQuery("#responsive_image").fitImg({
    'minHeight:' 240,
    'maxHeight:' 640,
    'align': 'right' // 'left' | 'right' | 'center'
});
````

By default `align` is set to `'center'`.

## CSS FAQ

- **Make sure your container has a width!**
  - `display: inline` elements don't have a width. Use `display: block` OR `display: inline-block`+ a specified width (i.e. `width: 100%`).
  - `position:absolute` elements need a specified width as well.
- Tweak until you like it.
- Set a No-JS fallback in your CSS.

## Changelog
* `v 1.0` - Initial Release

### Download, Fork, Commit.
If you think you can make this better, please Download, Fork, & Commit. We'd love to see your ideas.
