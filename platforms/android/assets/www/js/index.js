//import RNExitApp from 'react-native-exit-app-no-history';
var ready=false;
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        ready=true;
		document.getElementById('exit').addEventListener('click', exit);
		document.getElementById("pin").addEventListener('click' , pin);
    }
};

app.initialize();

function exit(e){
	navigator.app.exitApp();
	RNExitApp.exitApp();
}

function pin(e){
	alert(e.value;)
}
