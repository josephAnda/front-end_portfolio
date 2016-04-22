
(function() {

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
    		view.bio.css('background-image', backgrounds[current = ++current % backgrounds.length]);
    		setTimeout(view.changeBackground, 5000);
    	}
	}
	//  Use the following variables:
	var menuBox = document.getElementById('menu-box'),
		navigation = document.getElementById('navlist'),
		opened = false,
		boxes = document.querySelectorAll("#portfolio > div"),
		descriptions = document.querySelectorAll('.description'),
		bio = $('#bio');
	//  Holds the URLS for the backgreound images
	var backgrounds = [
      'url(css/img/guitar.jpg)', 
      'url(css/img/mix.jpg)'
    ];
    //  Tracks the current backgorund image 
    var current = 0;
    
    //  The function and initiall call initiate the process of changing the background
    
    setTimeout(view.changeBackground, 5000);


	//  Hide mobile nav initially + add menu logic
	navigation.style.visibility = 'hidden';  
	menuBox.addEventListener('click', function() {
		open();
	});

	//  Add mouseover effects for all item descriptions 
	for (var i=0; i<boxes.length; i++) {
		descriptions.item(i).style.opacity = '0';
		fadeIn(boxes.item(i), descriptions.item(i));
		fadeOut(boxes.item(i), descriptions.item(i));
	}

	//  Open and close 'menuBox' element on page
	function open() {
		if (!opened) {
			navigation.style.transition = 'all 0.5s ease';
			navigation.style.transform = 'translatey(15px)';
			navigation.style.visibility = 'visible';
			opened = true;

		} else {
			navigation.style.transition = 'all 0.2s ease';
			navigation.style.transform = 'translatey(-2px)';
			navigation.style.visibility = 'hidden';
			opened = false;
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
}) ();