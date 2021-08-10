var myButton = document.getElementById("myBtn");
var stickyHeader = document.getElementById("navigationbar");
var sticky = stickyHeader.offsetTop;
var imageHeader = document.getElementById("mainlogo");
var menuText1 = document.getElementById("menutext1");
var menuText2 = document.getElementById("menutext2");
var menuText3 = document.getElementById("menutext3");

function activeStickyTab () {

	var activeTabs = document.getElementsByClassName("active")[0].innerText;

	if (activeTabs === "HOME") {
		menuText1.style.color = "yellow";
	} else if (activeTabs === "PRODUCTS") {
		menuText2.style.color = "yellow";
	} else if (activeTabs === "ABOUT US") {
		menuText3.style.color = "yellow";
	}

}

function activeTab () {

	var activeTabs = document.getElementsByClassName("active")[0].innerText;

	if (activeTabs === "HOME") {
		menuText1.style.color = "#519c41";
	} else if (activeTabs === "PRODUCTS") {
		menuText2.style.color = "#519c41";
	} else if (activeTabs === "ABOUT US") {
		menuText3.style.color = "#519c41";
	}

}


		window.onscroll = function () {
			scrollFunction()
			fixedHeader()
		};

		function scrollFunction (){

			if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

				myButton.style.display = "block";

			} else {
				myButton.style.display = "none";
			}
		}

		function topFunction () {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}

		function fixedHeader () {

			if (window.pageYOffset > sticky) {
				stickyHeader.classList.add("sticky");
				imageHeader.style.width = "120px";
				menuText1.style.color = "#ffffff";
				menuText2.style.color = "#ffffff";
				menuText3.style.color = "#ffffff";
				activeStickyTab();

			} else {
				stickyHeader.classList.remove("sticky");
				imageHeader.style.width = "15%";
				menuText1.style.color = "#333333";
				menuText2.style.color = "#333333";
				menuText3.style.color = "#333333";
				activeTab();
			}
		}