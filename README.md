##marked_extra

This repository began as a GitHub fork of [chjj/marked](https://github.com/chjj/marked)

## Usage

Minimal usage:

```js
var marked = require('marked');
console.log(marked('I am using __markdown__.'));
// Outputs: <p>I am using <strong>markdown</strong>.</p>
```

Example setting options with default values:

```js
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

console.log(marked('I am using __markdown__.'));
```

### Browser

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Marked in the browser</title>
  <script src="lib/marked.js"></script>
</head>
<body>
  <div id="content"></div>
  <script>
    document.getElementById('content').innerHTML =
      marked('# Marked in browser\n\nRendered by **marked**.');
  </script>
</body>
</html>
```
more details https://github.com/chjj/marked/blob/master/README.md

##New Feature
###checkbox
The following markdown:

```markdown
-[] test
```

will render to something like this depending on how you choose to style it:
<input type="checkbox"> test</input>

###Definition Lists
The following markdown:

```markdown
Term 1
:   Definition 1

Term 2
:   This definition has a code block.

        code block
```

will render to something like this depending on how you choose to style it:
<dl>
  <dt>Term 1</dt>
  <dd>
    Definition 1
  </dd>
  <dt>Term 2</dt>
  <dd>
    This definition has a code block.
    <pre><code>code block</code></pre>
  </dd>
</dl>


##Footnotes
```markdown
Here is a footnote[^footnote].

  [^footnote]: Here is the *text* of the **footnote**.
```

<p>Here is a footnote<a href="#fn:footnote" id="fnref:footnote" title="See footnote" class="footnote">1</a>.</p>

<div class="footnotes">
<hr>
<ol>
<li id="fn:footnote">Here is the <em>text</em> of the <strong>footnote</strong>. <a href="#fnref:footnote" title="Return to article" class="reversefootnote">↩</a></li>
</ol>
</div>