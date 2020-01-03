Bootstrap Big Grid
==================
A set of larger grid options for Bootstrap.

Documentation and Tests
-----------------------
http://benwhitehead.github.io/bootstrap-big-grid/

Motivation
----------
Bootstrap's grid only provides a grid up to 1200px wide, this project provides more grids for common higher resolutions all the way up to 8K.

Changelog
---------
03/01/2020 Updated for Bootstrap 4.4.1
* Changed from LESS to SCSS
* Removed Bower in favour of Yarn
* Extended Bootstrap classes for responsive tables, dropdown menus, horizontal list groups, navbar, display, flexbox, float, spacing, and text alignment.
* Updated Usage and Classes info in Readme file

02/01/2020 Updated for Bootstrap 3.4.1; this version now lives in its own branch in case of future Bootstrap 3 updates.

09/10/2017 Updated grid class names and sizes for a more even spread of breakpoints at higher resolutions and to ensure class compatibility with Bootstrap 4.
* `col-xlg-*`: renamed to `col-hd-*`
* `col-uhd-*`: renamed to `col-4k-*`
* `col-4k-*`: renamed to `col-5k-*`, changed breakpoint from 4096px to 5120px
* `col-8k-*`: changed breakpoint from 8192px to 7680px

28/07/2017 Updated for Bootstrap 3.3.7

Usage
-----
The easiest way to use Bootstrap Big Grid is with Yarn.
```bash
yarn add https://github.com/thedutchess/bootstrap-big-grid
```

Alternatively download a [release](https://github.com/thedutchess/bootstrap-big-grid/releases) and use the CSS files in the dist directory.

Then link it into your page after the main Bootstrap CSS:

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="node_modules/bootstrap-big-grid/dist/css/bootstrap-big-grid.min.css"/>
```

Classes
-------

### Grid Classes
| Class        | Resolution  |
| :------------|:------------|
| `col-hd-*`   | 1366 × 768  |
| `col-fhd-*`  | 1920 × 1080 |
| `col-rt-*`   | 2560 × 1600 |
| `col-rt15-*` | 2880 × 1800 |
| `col-4k-*`   | 3840 × 2160 |
| `col-5k-*`   | 5120 × 2880 |
| `col-8k-*`   | 7680 × 4320 |

### Responsive Classes
The default Bootstrap classes for the responsive behaviour of various components and utilities have been extended for the Big Grid, please refer to the relevant Bootstrap documentation (linked below) for usage. To use these classes on higher resolutions, replace `{-sm|-md|-lg|-xl}` with `{-hd|-fhd|-rt|-rt15|-4k|-5k|-8k}`.
* [Table](https://getbootstrap.com/docs/4.4/content/tables/#responsive-tables)
* [Dropdown menu](https://getbootstrap.com/docs/4.4/components/dropdowns/#responsive-alignment)
* [Horizontal list group](https://getbootstrap.com/docs/4.4/components/list-group/#horizontal)
* [Navbar](https://getbootstrap.com/docs/4.4/components/navbar/#responsive-behaviors)
* [Display](https://getbootstrap.com/docs/4.4/utilities/display/#notation)
* [Flexbox](https://getbootstrap.com/docs/4.4/utilities/flex/)
* [Float](https://getbootstrap.com/docs/4.4/utilities/float/#responsive)
* [Spacing](https://getbootstrap.com/docs/4.4/utilities/spacing/#notation)
* [Text alignment](https://getbootstrap.com/docs/4.4/utilities/text/#text-alignment)

Note: The `hidden-*` and `visible-*` classes no longer exist in Bootstrap 4. If you want to hide an element on specific tiers or breakpoints, use the `d-*` classes accordingly.

Copyright and License
---------------------
Copyright 2013-2014 Ben Whitehead under the Apache 2.0 license.
