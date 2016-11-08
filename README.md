#css-prefixer
Add class and/or ID to all elements in a stylesheet. 

It's dead simple. [Use it online](http://projects.tabeth.com/css-prefixer), or copy the code below and use it yourself:
```javascript
/* Prefixes a given CSS string.
 *
 * @param {String} cssString - the CSS which has rules to be prefixed
 * @param {String} prefixName - the string to be used in prefixing
 * @param {String} delimiter - the delimiter to be used
 * @returns {String} original cssString prefixed by prefixName. Comments are removed.
 */
function prefixCSSRule(cssString, prefixName, delimiter = ' ') {
  var uncommentedCSS = cssString.replace(/(\/\*[^]*?\*\/)/g, '');
  return uncommentedCSS.replace(/([\s$]*)((\/\/.*[\s$]+|.*\/\*.*\*\/[\s$]*|@media.*\{[\s$]*|)*)([\.#]?-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g, '$1$2' + prefixName + delimiter + '$4');
}
 ```
