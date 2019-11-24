$(document).ready(function() {

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