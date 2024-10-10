document.querySelectorAll(".tree li").forEach(function(e){if(e.firstElementChild){var t=e.querySelector("ul"),n=document.createElement("span"),l=t.parentElement.firstChild.textContent.trim();n.textContent=l,e.firstChild.replaceWith(n),n.addEventListener("click",function(){t.style.display="none"===t.style.display?"block":"none"})}});
//# sourceMappingURL=index.aa47a9b7.js.map
