get('/api/whoami', {}, function(user) {
	const navbarItem = $("#log-in")
	if (user._id) {
		navbarItem.text("Sign Out");
		navbarItem.attr('href',"/logout");

		const trip = document.getElementById('newTrip');
		trip.className = 'nav-item'

		const profileLink = document.getElementById('profile-link');
		const profile = document.getElementById('profile');
		profile.className = 'nav-item'
		profileLink.href = '/profile/' + user._id;
	}
});