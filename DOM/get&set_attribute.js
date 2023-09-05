const link= document.querySelector("a");
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1));

link.setAttribute("href","https://www.google.com");
console.log(link.getAttribute("href"));