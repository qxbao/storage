// ==UserScript==
// @name         Nimo Janitor
// @namespace    https://www.facebook.com/q2theb/
// @version      1.0
// @description  Dọn sạch phần tử không cần thiết khỏi nimo
// @author       Orca
// @match        https://www.nimo.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nimo.tv
// @grant        none
// @require https://code.jquery.com/jquery-3.6.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    const element = ['.nimo-svga-gift', '.chatroomShareComp-container', '.UserEnterRoomMessageItem', '.nimo-theme-dark.page-mini-panels', '.rich-text-container', '.movePannel', '.n-as-mrgh', '.nimo-gift-banner', '.nimo-room__chatroom__box-gift', '.nimo-room__chatroom__message-item'];
    setInterval(() => {
        for (let e of element) {
            $(e).css('display', 'none');
        }
    }, 500)
})();
