# Gulp partials to <script>

> Add the content of a partial between <script>

## Install

Install with [npm](https://npmjs.org/package/gulp-partial-to-script)

```
npm install --save-dev gulp-template
```


## Example

- `src/greeting.html`

```erb
<h1>Hello <%= name %></h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, beatae, dicta, quo eum inventore repellat quidem accusantium perferendis error magnam sequi hic placeat aperiam iusto ipsum quas non repellendus quaerat!</p>
```

- `gulpfile.js`

```js
var gulp     = require('gulp'),
    partials = require('gulp-partial-to-script');

gulp.task('default', function () {
  gulp.src('src/greeting.html')
    .pipe(partials())
    .pipe(gulp.dest('dist'));
});
```

- `dist/greeting.html`

```html
<script type="text/template" id="greeting-viewtpl">
<h1>Hello <%= name %></h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, beatae, dicta, quo eum inventore repellat quidem accusantium perferendis error magnam sequi hic placeat aperiam iusto ipsum quas non repellendus quaerat!</p>
</script>
```

## API

`partials(options)`

- **data** : Type: `Object`

```JavaScript
{
  suffix : "-viewtpl",
  ext : ".html"
}
```

> These are the default settings if options is undefined
