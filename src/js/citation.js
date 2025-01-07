// AKfycbzSjRrrcZSUVM4algbcOgHjGPgvr8wngB14MXh8pYc0bzw7gJsLwfzCKZQBmUz2GaFS

$(document).ready(function() {
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzSjRrrcZSUVM4algbcOgHjGPgvr8wngB14MXh8pYc0bzw7gJsLwfzCKZQBmUz2GaFS/exec",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('data:', data);

            var monAuteur ="";
            var maCitation = "";
            var randomItem = data[Math.floor(Math.random() * data.length)];

            // $.each(data, function(index, item) {
                monAuteur += "<img src='img/" + randomItem.Photo + "' alt='"+randomItem.Auteur+"' class='rounded-full h-16 aspect-square object-cover' /> <h2 class='mx-4 font-serif font-medium'>" + randomItem.Auteur + "</h2> <p class='border-l pl-4 italic border-blue-900'>" + randomItem.Description + "</p>";

                maCitation += "<h1 class='text-5xl font-serif'>" + randomItem.Citation + "</h1>";





                $('.auteur').html(monAuteur);
                $('.citation').append(maCitation);
                $('#RefreshButton').click(function() {
                    data[Math.floor(Math.random() * data.length)];
                });
            // });
        },
        error: function(xhr, status, error) {
            console.error('error:', error);
        }
    });
    
});