[![Build Status](https://travis-ci.com/Ferror/grave.svg?branch=master)](https://travis-ci.com/Ferror/grave)
[![License: MIT](https://img.shields.io/apm/l/vim-mode.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/v/release/ferror/grave.svg)](https://github.com/Ferror/grave/releases)

# grave
#### Simple HTML/CSS website framework

<img src="https://assets.malcherczyk.com/icons/icon_g.svg" width="100" height="100">

## Usage

### If you want the autodetect mode
```html
<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ferror/grave@gh-pages/3.2/grave.min.css">
    </head>
</html>
```

### If you prefer light mode
```html
<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ferror/grave@gh-pages/3.2/grave-light.min.css">
    </head>
</html>
```

### If you prefer dark mode
```html
<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ferror/grave@gh-pages/3.2/grave-dark.min.css">
    </head>
</html>
```

## Release
### Autodetect Mode
You can release/compile and minimize css by typing:
```
node_modules/gulp/bin/gulp.js release
```

### Dark Mode
and to release dark mode:
```
node_modules/gulp/bin/gulp.js release --dark
```

### Light Mode
and to release light mode:
```
node_modules/gulp/bin/gulp.js release --light
```

## Changelog

### 3.4
* Paragraph links will be underlined

### 3.3
* Change the paragraph font family to Times New Roman
* Improve code tag on dark mode
* Minor checkbox input fixes
* Increasing margin-bottom for structure elements
* Make header 2, 4, and 6 with opacity 0.8
