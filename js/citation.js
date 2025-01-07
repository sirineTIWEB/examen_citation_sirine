// AKfycbzSjRrrcZSUVM4algbcOgHjGPgvr8wngB14MXh8pYc0bzw7gJsLwfzCKZQBmUz2GaFS

$(document).ready(function() {
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzSjRrrcZSUVM4algbcOgHjGPgvr8wngB14MXh8pYc0bzw7gJsLwfzCKZQBmUz2GaFS/exec",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            $.each(data, function(index, item) {
                
            });
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
    
});