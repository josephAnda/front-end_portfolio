
(function() {
	//  [!!]  Finish refactoring this for MVC paradigm  
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
    	waitTime: 5000, //  Describes the ms between background changes
    	current: 0,	   
    	init: function() {
			//  Hide mobile nav initially + add menu logic
			view.navigation.style.visibility = 'hidden';  
			view.menuBox.addEventListener('click', function() {
				controller.open();
			});
    	}
	}

	var controller = {
		init: function() {
			view.init();
			setTimeout(controller.changeBackground, view.waitTime);
			controller.addMouseOvers();
		},
		//  The idea for the function below came from Stack Overflow
		changeBackground: function() {
    		view.bio.css('background-image', view.backgrounds[view.current = ++view.current % view.backgrounds.length]);
    		setTimeout(controller.changeBackground, view.waitTime);
    	},
		addMouseOvers: function() {
    		
    		//  Add mouseover effects for all item descriptions 
			for (var i=0; i<view.boxes.length; i++) {
				view.descriptions.item(i).style.opacity = '0';
				controller.fadeIn(view.boxes.item(i), view.descriptions.item(i));
				controller.fadeOut(view.boxes.item(i), view.descriptions.item(i));
			}
    	}, 
    	open: function() {
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
    	},
    	fadeIn: function(box, element) {
    		box.addEventListener('mouseover', function() {
				element.style.transition = 'opacity .25s ease-in-out';
				element.style.opacity = '1';
			});
    	},
    	fadeOut: function(box, element) {
    		box.addEventListener('mouseout', function() {
				element.style.transition = 'opacity .25s ease-in-out';
				element.style.opacity = '0';
			});
    	}
	}

    //  Initialize	
	controller.init();
}) ();