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
    }
};

app.initialize();
function exit(e){
	navigator.app.exitApp(0);
}
