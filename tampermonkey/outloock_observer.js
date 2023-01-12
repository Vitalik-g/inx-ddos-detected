// ==UserScript==
// @name         DDos message triger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://outlook.office.com/mail/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=office.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                newMessge(document.querySelector('.dY0vK').firstElementChild);
            }
        });
    });

    setTimeout(()=>{
        observer.observe(document.querySelector('.dY0vK'), { childList: true });
        console.log("infa")
    },10000)

    async function newMessge (newDOMelement){
        console.log(newDOMelement);

        let title = newDOMelement.querySelector('.dT1Xn').innerText
        if (title == "DDoS Attack Detected"){
            let myRe = new RegExp("[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{1,3})?")
            var time = myRe.exec(newDOMelement.querySelector(".RWWAe").innerText)[0] .split(":")
            window.open('http://localhost:1325');
        }
    }
})();