[![Build Status](https://travis-ci.org/Ferror/grave.svg?branch=master)](https://travis-ci.org/Ferror/grave)
[![License: MIT](https://img.shields.io/apm/l/vim-mode.svg)](https://opensource.org/licenses/MIT)
[![PDD status](http://www.0pdd.com/svg?name=Ferror/0pdd)](http://www.0pdd.com/p?name=Ferror/0pdd)

# grave
#### Simple HTML/CSS website framework

<img src="https://assets.malcherczyk.com/icons/icon_g.svg" width="100" height="100">

## If you prefer light mode

```html
<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ferror/grave@gh-pages/grave.min.css">
    </head>
</html>
```

## If you prefer dark mode

```html
<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ferror/grave@gh-pages/grave-dark.min.css">
    </head>
</html>
```

# Release

You can release/compile and minimize css by typing:
```
node_modules/gulp/bin/gulp.js release
```

and to release dark mode:
```
node_modules/gulp/bin/gulp.js release --dark
```
