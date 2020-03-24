const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/custom-element/runtime-es5.js',
        './dist/custom-element/polyfills-es5.js',
        './dist/custom-element/main-es5.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/custom-element.js');
    // await concat('./dist/custom-element/styles.css', 'elements/styles.css');
})();