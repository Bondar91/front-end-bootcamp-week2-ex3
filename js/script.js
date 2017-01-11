function fecz(url, success, failure) {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", url, true);

	xhr.onload = function() {
		if(xhr.status == 200) 
		{
			success(xhr.responseText);
		}
		else
		{
			failure(new Error("Błąd! status błędu to: " + xhr.status));
		}
	};

	xhr.send();
}

(function(){

	var btn = document.querySelector("#btn"),
		results = document.querySelector("#results");

	btn.addEventListener("click", function(e){
		fecz("https://jsonplaceholder.typicode.com/users", function(d){
			console.log("Działa");
			results.innerText = d;
		}, function(err){
			console.log(err.message);
		});
	});

})();