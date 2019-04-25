// JavaScript Document
let element = document.querySelector(".banner"); 
element.addEventListener("load", setTimeout(reloadBanner, 3000)); //den starter med at tælle, når siden loader 


function reloadBanner(){
	location.reload();
}