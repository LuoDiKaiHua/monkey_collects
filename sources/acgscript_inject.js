// ==UserScript==
// @name         战术脚本（漫猫/爱恋/MioBT 种子列表增强+生存模式BT下载链接）
// @icon         https://www.kisssub.org/images/favicon/kisssub.ico
// @namespace    https://www.kisssub.org
// @version      1.1
// @description  漫猫/爱恋/MioBT 种子列表增强+生存模式BT下载链接
// @author       LuoDiKaiHua
// @match        http://*.kisssub.org/*
// @match        http://*.comicat.org/*
// @match        http://*.miobt.com/*
// @match        https://*.kisssub.org/*
// @match        https://*.comicat.org/*
// @match        https://*.miobt.com/*
// @include      http://*.kisssub.org/*
// @include      http://*.comicat.org/*
// @include      http://*.miobt.com/*
// @include      https://*.kisssub.org/*
// @include      https://*.comicat.org/*
// @include      https://*.miobt.com/*
// @grant        none
// @license MIT
// @run-at document-body
// ==/UserScript==

var win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
(function () {
    'use strict';
    var doc = win.document;
    var uuid = 'A8065B77-F041-424A-BA3B-0BADEF2360C4';
    var script = doc.getElementById(uuid);
    if (script) {
        console.log('script already exists.');
        return;
    }
    setTimeout(function () {
        script = doc.createElement('script');
        script.setAttribute('src', '//www.acgscript.com/script/miobt/1x4.js?1x3');
        script.setAttribute('id', uuid);
        script.setAttribute('type', 'text/javascript');
        doc.body.appendChild(script);
    }, 1000);
})();
