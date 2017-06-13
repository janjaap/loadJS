var loadJS = function (e) {
    if (!e.src)
        throw new Error("[loadJS] 'src' is missing in options object");
    for (var t = {
        async: !0,
        integrity: "",
        type: "text/javascript",
        crossOrigin: null,
        onload: function () { },
        onerror: function () { }
    }, n = Object.assign(t, e), r = document.getElementsByTagName("script")[0], i = document.createElement("script"), s = Object.keys(n), l = s.length, o = 0; o < l; o += 1)
        i[s[o]] = n[s[o]];
    return r.parentNode.insertBefore(i, r),
        i.onload = n.onload,
        i.onerror = n.onerror,
        i
};
window.loadJS = loadJS;
