$(document).ready(function() {
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzSjRrrcZSUVM4algbcOgHjGPgvr8wngB14MXh8pYc0bzw7gJsLwfzCKZQBmUz2GaFS/exec",
        type: 'GET',
        dataType: 'json',
        loading: $('#loadingScreen').show(),
        success: function(data) {
            console.log('data:', data);

            $('#loadingScreen').hide();

            document.documentElement.classList.toggle(
                'dark',
                localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            );

            var monAuteur ="";
            var maCitation = "";
            var randomItem = data[Math.floor(Math.random() * data.length)];

            // $.each(data, function(index, item) {
                monAuteur += "<img src='img/" + randomItem.Photo + "' alt='"+randomItem.Auteur+"' class='rounded-full h-16 aspect-square object-cover' /> <h2 class='mx-4 font-serif font-medium md:mx-4'>" + randomItem.Auteur + "</h2> <p class='md:pl-4 border-l pl-4 italic border-blue-900'>" + randomItem.Description + "</p>";

                maCitation += "<h1 class='text-5xl font-serif text-center md:text-sm'>" + randomItem.Citation + "</h1>";

                $('.auteur').html(monAuteur);
                $('.citation').append(maCitation);

                $('#RefreshButton').click(function() {
                    window.location.reload();
                });
            // });
        },
        error: function(xhr, status, error) {
            console.error('error:', error);
        }
    });//end ajax

    // début PWA
    let deferredPrompt;
    const installButton = $('#PWAbutton')[0];
    installButton.style.display = 'none';
    const msgerreur = "";

    // Détection si l'installation est possible
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;

        // Vérification de la plateforme
        if (/iPhone|iPad|iPod/.test(navigator.platform)) {
            msgerreur = "L'installation n'est pas possible sur iOS";
            installButton.html(msgerreur);
            installButton.disabled = true;
        } else {
            installButton.style.display = 'block';
        }
    });

    // Gestion du clic sur le bouton d'installation
    installButton.addEventListener('click', async () => {
        if (!deferredPrompt) return;

        const result = await deferredPrompt.prompt();
        console.log(`Installation ${result.outcome}`);
        deferredPrompt = null;
        installButton.style.display = 'none';
    });

    // Détection si l'app est déjà installée
    window.addEventListener('appinstalled', () => {
        deferredPrompt = null;
        installButton.style.display = 'none';
    }); // fin PWA
      
    
}); //end ready