var menuBox = document.getElementById('menu-box');
var navigation = document.getElementById('navlist');
var opened = false;

menuBox.addEventListener('click', function() {
	open();
});

function open() {
	if (!opened) {
		navigation.style.display = 'inline';
		opened = true;
	} else {
		navigation.style.display = 'none';
		opened = false;
	}
}