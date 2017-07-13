/**
 * loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT
 *
 * @param {String} src - URL to load
 * @param {Object} options - Settings object
 * @return {Element} script - reference to the create script element
 */
const loadJS = (src, options = {}) => {
    const defaultSettings = {
        /**
         * Setting this to false will force the browser to (asynchronously, oh the irony) load
         * scripts in the order they are requested.
         * @type {Boolean}
         */
        async: true,

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
         * @type {String}
         */
        integrity: '',

        /**
         * @type {String}
         */
        type: 'text/javascript',

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-crossorigin
         * @type {String}
         */
        crossOrigin: null,

        /**
         * @type {Function}
         */
        onload: (() => { }),

        /**
         * @type {Function}
         */
        onerror: (() => { }),
    };

    const settings = Object.assign(defaultSettings, options, { src });
    const ref = document.getElementsByTagName('script')[0];
    const script = document.createElement('script');
    const settingsKeys = Object.keys(settings);
    const settingsLength = settingsKeys.length;

    for (let i = 0; i < settingsLength; i += 1) {
        script[settingsKeys[i]] = settings[settingsKeys[i]];
    }

    ref.parentNode.insertBefore(script, ref);

    script.onload = settings.onload;
    script.onerror = settings.onerror;

    return script;
};

window.loadJS = loadJS;
