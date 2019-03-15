/**
 * Adds a event listeners for a user deletion buttons.
 */
document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.getElementsByClassName('delete-btn');
	for (const button of buttons)
		button.addEventListener('mouseover', function() {
			this.src = '/images/red-recycle-bin.png';
		});
});
document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.getElementsByClassName('delete-btn');
	for (const button of buttons)
		button.addEventListener('mouseout', function() {
			this.src = '/images/green-recycle-bin.png';
		});
});


/**
 * Adds a event listeners for a user edit buttons.
 */
document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.getElementsByClassName('edit-btn');
	for (const button of buttons)
		button.addEventListener('mouseover', function() {
			this.src = '/images/pencil-green.png';
		});
});
document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.getElementsByClassName('edit-btn');
	for (const button of buttons)
		button.addEventListener('mouseout', function() {
			this.src = '/images/pencil-yellow.png';
		});
});