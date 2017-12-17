$(function(){
    
    var socket = new WebSocket("ws://localhost:8880");
    socket.onopen = function () {
        log("Connected to WebSocket server", 'alert-primary');
    };
    socket.onclose = function (event) {
        if (event.wasClean) {
            log('Web Socket Connection closed', 'alert-warning');
        } else {
            log('Web Socket Connection lost', 'alert-danger');
        }
        log('code: ' + event.code + ' reason: ' + event.reason, 'alert-warning');
    };
    socket.onmessage = function (event) {
        log("Received Data from WebSocket server: " + event.data, 'alert-primary');
    };
    socket.onerror = function (error) {
        log("Error " + error.message, 'alert-danger');
    };

    /**
     * Handler for send data to WebSocket server
     */
    $("#test_button").on('click', function () {
        var data = $('#payload').val();
        log("Sent data to WebSocket server: " + data, 'alert-primary');
        socket.send(data);
    });

    
    var log = function (msg, msgClass) {
        var logObj = $('#log');
        var msgObj = $('<div/>').addClass('alert').addClass(msgClass).text(msg);
        logObj.prepend(msgObj);
    };
});
