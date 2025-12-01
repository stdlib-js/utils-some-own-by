<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# someOwnBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether an object contains at least `n` own properties which pass a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
someOwnBy = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-some-own-by@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var someOwnBy = require( 'path/to/vendor/umd/utils-some-own-by/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-some-own-by@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.someOwnBy;
})();
</script>
```

#### someOwnBy( obj, n, predicate\[, thisArg ] )

Tests whether an `object` contains at least `n` own properties which pass a test implemented by a `predicate` function.

```javascript
function isNegative( value ) {
    return ( value < 0 );
}

var obj = {
    'a': 1,
    'b': -2,
    'c': 3,
    'd': -1
};

var bool = someOwnBy( obj, 2, isNegative );
// returns true
```

Once the function finds `n` successful properties, the function **immediately** returns `true`.

```javascript
function isPositive( value ) {
    if ( value < 0 ) {
        throw new Error( 'should never reach this line' );
    }
    return ( value > 0 );
}

var obj = {
    'a': 1,
    'b': 2,
    'c': -3,
    'd': 4
};

var bool = someOwnBy( obj, 2, isPositive );
// returns true
```

The invoked `function` is provided three arguments:

-   **value**: object property value.
-   **key**: object property key.
-   **obj**: input object.

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    this.sum += value;
    this.count += 1;
    return ( value < 0 );
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': -5
};

var context = {
    'sum': 0,
    'count': 0
};

var bool = someOwnBy( obj, 1, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 0.25
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   An [`Object`][mdn-object] refers to a JavaScript object, which is a collection of properties. Each property is an association between a key (or name) and a value. The key can be a string or a symbol, and the value can be any JavaScript value, including functions and other objects

-   If provided an empty `object`, the function returns `false`.

    ```javascript
    function alwaysTrue() {
        return true;
    }
    var bool = someOwnBy( {}, 1, alwaysTrue );
    // returns false
    ```

-   The function does **not** skip `undefined` elements.

    <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

    ```javascript
    function log( value, key ) {
        console.log( '%s: %s', key, value );
        return ( value < 0 );
    }

    var obj = {
        'a': 1,
        'b': void 0,
        'c': void 0,
        'd': 4,
        'e': -1
    };

    var bool = someOwnBy( obj, 1, log );
    /* =>
        a: 1
        b: void 0
        c: void 0
        d: 4
        e: -1
    */
    ```

-   The function provides limited support for dynamic objects (i.e., objects whose `length` changes during execution).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-some-own-by@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function threshold( value ) {
    return ( value > 0.95 );
}

var bool;
var obj = {};
var i;

for ( i = 0; i < 100; i++ ) {
    obj[ 'key'+i ] = randu();
}

bool = someOwnBy( obj, 5, threshold );
// returns <boolean>

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/object-any-own-by`][@stdlib/object/any-own-by]</span><span class="delimiter">: </span><span class="description">test whether whether any 'own' property of a provided object satisfies a predicate function.</span>
-   <span class="package-name">[`@stdlib/object-every-own-by`][@stdlib/object/every-own-by]</span><span class="delimiter">: </span><span class="description">test whether all own properties of an object pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-some-by`][@stdlib/utils/some-by]</span><span class="delimiter">: </span><span class="description">test whether a collection contains at least `n` elements which pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/object-some-in-by`][@stdlib/object/some-in-by]</span><span class="delimiter">: </span><span class="description">test whether an object contains at least n properties (own and inherited) which pass a test implemented by a predicate function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-some-own-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-some-own-by

[test-image]: https://github.com/stdlib-js/utils-some-own-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-some-own-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-some-own-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-some-own-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-some-own-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-some-own-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-some-own-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-some-own-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-some-own-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-some-own-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-some-own-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-some-own-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-some-own-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-some-own-by/main/LICENSE

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/object/any-own-by]: https://github.com/stdlib-js/object-any-own-by/tree/umd

[@stdlib/object/every-own-by]: https://github.com/stdlib-js/object-every-own-by/tree/umd

[@stdlib/utils/some-by]: https://github.com/stdlib-js/utils-some-by/tree/umd

[@stdlib/object/some-in-by]: https://github.com/stdlib-js/object-some-in-by/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
