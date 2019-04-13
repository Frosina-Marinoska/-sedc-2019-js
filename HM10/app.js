$(function(){
 // $("#background").slideUp();
    function getResult(artist, song) {
        var lyricsAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        $.getJSON(lyricsAPI).done(function(data) {

            console.log(data);

            printFlickrPhotos(data.lyrics);         
        }).fail(function() {
            console.log("failed");
        })
    }

    function printFlickrPhotos(lyrics) {
         $("#lyrics").css("background-color", "rgba(6, 10, 17, 0.7)");
        $("#lyrics").text(lyrics);
        $("#btn-search").attr("disabled", false);
        $("#loader").slideUp();
    }

    $("#btn-search").on("click", function(){
        $("#btn-search").attr("disabled", true);
        $("#loader").slideDown();
        
        let artist = $("#artist").val();
        let song = $("#song").val();

        getResult(artist, song);
    });
});