var menuBox = document.getElementById('menu-box');
var navigation = document.getElementById('navlist');
var opened = false;

navigation.style.visibility = 'hidden';  //initialize drop-down nav element in an invisible state

//Logic for the drop-down menu
menuBox.addEventListener('click', function() {
	open();
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