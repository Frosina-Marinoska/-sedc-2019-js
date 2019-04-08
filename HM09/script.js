$(function(){
	$("#mesage").hide();
	var fliker = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	function result(prima){
		$.getJSON(fliker, {
			tags: prima,
			tagmode: "any",
            format: "json"
		}).done(function (data) {
			console.log(data.items);
			$("#mesage").show();
			$("#mesage").text("lista na avtori");
			printDOM(data.items);
			
		}) .fail(function() {
            console.log("failed");
        })
	}
	$("button").on("click", function(){
		$("#gif").slideDown();
		let prima = $("#search").val();
		result(prima);
	});

	function printDOM(listAuthor){		
		for (avtor of listAuthor){
		let lista = `<li> Naslov:  ${avtor.title} <br> Avtor: ${avtor.author}</li> `;
		$("#printing").append(lista);
		}
		$("#gif").slideUp();	

	}

	


	





});