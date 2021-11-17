

/*function myFunction() {
let u = document.getElementById("myAnchor").href;
alert("The vaule of the href attribute of the link is : "+u)
}*/

const btn = document.querySelector(".btn")
//const linkUrl = document.getElementById('link').getAttribute('href');

btn.addEventListener("click", function () {
	const linkUrl = document.getElementById('link').getAttribute('href')
	document.getElementById('p1').innerHTML = linkUrl;
})