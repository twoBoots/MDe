**marked documentation [here](https://github.com/chjj/marked)**

# MDe

Markdown extended.

Markdown is brilliant. It serves a purpose. It serves that purpose well.

But sometimes you need more.

Not all h1's are the same.

## Installation

```
npm install marked mde --save
```

## Usage

```
var marked =  require('marked');

var renderer = require('mde')(new marked.Renderer());

marked.setOptions({
  renderer: renderer
});
```

### Shorthand

`# Heading {#headingID.headingClass1.headingClass2}`

`My paragraph that has text to be hated by everyone everywhere {.msComicSans}`

### Longhand
**TODO**
