var menuBox = document.getElementById('menu-box');
var navigation = document.getElementById('navlist');

menuBox.addEventListener('click', function() {
	open();
});

var opened = false;

function open() {
	if (!opened) {
		navigation.style.display = 'inline';
		opened = true;
	} else {
		navigation.style.display = 'none';
		opened = false;
	}
}