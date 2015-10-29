$(document).ready (function() {

		var newsData = "https://json-data.herokuapp.com/restaurant/news/1";

		$.ajax({
			url: newsData,
			method: 'get',
			dataType: 'json'
		}).then(function (newsBoxData) {

			var newsDataPull = {
				newsBoxData : newsBoxData
			};

		var newsFormTemplate = $("#newsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var formHTML = Mustache.render(newsFormTemplate, newsDataPull);
		$("#theForm").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML
	});

		var specialsData = "https://json-data.herokuapp.com/restaurant/special/1";

		$.ajax({
			url: specialsData,
			method: 'get',
			dataType: 'json'
		}).then(function (specialsBoxData) {

		var specialsDataPull = {
				specialsBoxData : specialBoxData
			};

		var specialsFormTemplate = $("#specialsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var formHTML = Mustache.render(specialsFormTemplate,specialsDataPull);
		$("#theForm").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML
	});


		var menuData = "https://json-data.herokuapp.com/restaurant/menu/2";

		$.ajax({
			url: menuData,
			method: 'get',
			dataType: 'json'
		}).then(function (menuBoxData) {

			var menuDataPull = {
				menuBoxData : menuBoxData
			};

		var menuFormTemplate = $("#menuFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var formHTML = Mustache.render(specialsFormTemplate,specialsDataPull);
		$("#theForm").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML
	});

});





		