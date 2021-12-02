// ==UserScript==
// @name         AntiNimoGift
// @namespace    http://facebook.com/q2theb
// @version      0.1
// @description  Xóa quà tặng bay bay trên khung chat
// @author       Bao
// @match        https://*.nimo.tv/*
// @icon         https://www.google.com/s2/favicons?domain=nimo.tv
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

(function(){
    'use strict';
    var t=[];
    t.push($('.nimo-gift-banner.n-as-abs.n-as-of-hidden.n-as-no-evt.n-fx-col.n-fx-sn.n-as-padh.n-as-bd-box'));
    t.push($(".n-as-abs.chat-room__enter_banner.n-as-w100"));
    var rem=(x)=>{for(let i=0;i<x.length;i++){for(let y=0;i<x[i].length;i++){x[i][y].remove();}}};
    rem(t);
    console.log("done")
})();
