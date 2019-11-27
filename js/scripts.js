$(document).ready(function() {

    // Global variables
    window.COMETCHAT_APP_ID = 'YOUR_COMMETCHAT_APP_ID';
    window.COMETCHAT_API_KEY = 'YOUR_COMMETCHAT_API_KEY';

    // Initialize app
    chatService.initializeApp();
    pushNotificationService.initializeFirebase();

    // Send message
    $('#message-form').submit(function(e) {    
        e.preventDefault(); 

        $('.old-chats').remove();
        chatService.sendMessage();


        $('#message-form').trigger('reset');
    });

});