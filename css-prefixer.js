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
