
(function() {
	//  Finish refactoring this for MVC paradigm  
	"use strict";
	var view = {
		menuBox:  document.getElementById('menu-box'),
		navigation:  document.getElementById('navlist'),
		opened:  false,
		boxes:  document.querySelectorAll("#portfolio > div"),
		descriptions: document.querySelectorAll('.description'),
		bio:  $('#bio'),
		backgrounds:  [
      		'url(css/img/guitar.jpg)', 
      		'url(css/img/mix.jpg)'
    	],
    	current: 0,
    	changeBackground: function() {
    		view.bio.css('background-image', view.backgrounds[view.current = ++view.current % view.backgrounds.length]);
    		setTimeout(view.changeBackground, 5000);
    	},
    	addMouseOvers: function() {
    		
    		//  Add mouseover effects for all item descriptions 
			for (var i=0; i<view.boxes.length; i++) {
				view.descriptions.item(i).style.opacity = '0';
				fadeIn(view.boxes.item(i), view.descriptions.item(i));
				fadeOut(view.boxes.item(i), view.descriptions.item(i));
			}
    	},
    	init: function() {
    		setTimeout(view.changeBackground, 5000);


			//  Hide mobile nav initially + add menu logic
			view.navigation.style.visibility = 'hidden';  
			view.menuBox.addEventListener('click', function() {
				open();
			});
			view.addMouseOvers();
    	}
	}
	var controller = {
		init: function() {
			view.init();
		}
	}


    
    //  The function and initiall call initiate the process of changing the background
    




	//  Open and close 'menuBox' element on page
	function open() {
		if (!view.opened) {
			view.navigation.style.transition = 'all 0.5s ease';
			view.navigation.style.transform = 'translatey(15px)';
			view.navigation.style.visibility = 'visible';
			view.opened = true;

		} else {
			view.navigation.style.transition = 'all 0.2s ease';
			view.navigation.style.transform = 'translatey(-2px)';
			view.navigation.style.visibility = 'hidden';
			view.opened = false;
		}
	}

	//  Show item description 
	function fadeIn(box, element) {
		box.addEventListener('mouseover', function() {
			element.style.transition = 'opacity .25s ease-in-out';
			element.style.opacity = '1';
		});
	}

	//  Hide item description 
	function fadeOut(box, element) {
		box.addEventListener('mouseout', function() {
		element.style.transition = 'opacity .25s ease-in-out';
		element.style.opacity = '0';
		});
	}
	console.log(bio);
	controller.init();
}) ();