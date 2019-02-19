/**
 * Adds a event listeners for a user deletion buttons.
 * 
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

/*document.addEventListener('DOMContentLoaded', () => {
	const forms = document.getElementsByClassName('form-delete-btn');
	for (const form of forms)
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			console.log('We do get here when both a submit button' 
						+ 'is clicked and the image ' + form.childNodes[4].value);
		});
});
*/
