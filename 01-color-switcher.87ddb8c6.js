const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){n=!0,t.setAttribute("disabled",""),e.removeAttribute("disabled"),o=setInterval(d,500),console.log("Старт!")})),e.addEventListener("click",(function(){n&&t.removeAttribute("disabled");e.setAttribute("disabled",""),clearInterval(o),console.log("Стоп")}));let o=null,n=!1;function d(){document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.87ddb8c6.js.map
