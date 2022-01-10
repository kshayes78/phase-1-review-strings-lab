const currentUser = 'Kimberly Hayes';

//const welcomeMessage = 'Welcome to Flatbook, ';

//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;
const welcomeMessage = `Welcome to Flatbook, ${currentUser} !`;
//const excitedWelcomeMessage = 'WELCOME TO FLATBOOK, ';
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//const shortGreeting = "Welcome, "
//const shortGreeting = `Welcome, ${currentUser}`;
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;