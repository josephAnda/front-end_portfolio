var menuBox = document.getElementById('menu-box');
var navigation = document.getElementById('navlist');
var opened = false;

/*
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
*/



//  Below is an experiment to espouse DRY to the process of adding event listeners
var boxes = document.querySelectorAll("#portfolio > div");
var descriptions = document.querySelectorAll('.description')

function fadeIn(box, element) {
	box.addEventListener('mouseover', function() {
		element.style.transition = 'opacity .25s ease-in-out';
		element.style.opacity = '1';
	});
}

function fadeOut(box, element) {
	box.addEventListener('mouseout', function() {
	element.style.transition = 'opacity .25s ease-in-out';
	element.style.opacity = '0';
	});
}

//description1.style.visibility = 'hidden';

navigation.style.visibility = 'hidden';  //initialize drop-down nav element in an invisible state

//Logic for the drop-down menu
menuBox.addEventListener('click', function() {
	open();
});


//fadeIn(box2, description2);
//fadeOut(box2, description2);
for (var i=0; i<boxes.length; i++) {
	descriptions.item(i).style.opacity = '0';
	fadeIn(boxes.item(i), descriptions.item(i));
	fadeOut(boxes.item(i), descriptions.item(i));
}
box1.addEventListener('mouseout', function() {
	description1.style.transition = 'opacity .25s ease-in-out';
	description1.style.opacity = '0';
	//description1.style.visibility = 'hidden';
});

function open() {
	if (!opened) {
		navigation.style.transition = 'all 0.5s ease';
		navigation.style.transform = 'translatey(15px)';
		navigation.style.visibility = 'visible';
		//navigation.style.display = 'inline';  <--  Removed for transition.  Also, b/c visibility property handles this
		opened = true;

	} else {
		navigation.style.transition = 'all 0.2s ease';
		navigation.style.transform = 'translatey(-2px)';
		navigation.style.visibility = 'hidden';
		//navigation.style.display = 'none'; <--- Removed for transition experiment 
		opened = false;
	}
}

