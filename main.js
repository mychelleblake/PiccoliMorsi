$(document).ready (function() {


	// retrieve newsletter data

		var newsData = "http://79.170.44.100/piccolimorsi.com/news.json";

		$.ajax({
			url: newsData,
			method: 'get',
			dataType: 'json'
		}).then(function (newsBoxData) {

			var newsDataPull = {
				newsBoxData : newsBoxData
			};
			console.log(newsDataPull);
		// var newsFormTemplate = $("#newsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		// var formHTML = Mustache.render(newsFormTemplate, newsDataPull);
		// $("#theForm").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML
	});

	// retrieve specials data


			var menuData = "http://79.170.44.100/piccolimorsi.com/menu.json";

			$.ajax({
				url: menuData,
				method: 'get',
				dataType: 'json'
			}).then(function (menuBoxData) {

				var menuDataPull = {
					menuBoxData : menuBoxData
				};

				console.log(menuDataPull);

				var specialsData = "https://json-data.herokuapp.com/restaurant/special/1";

				var spec = function() {
					$.ajax({
						url: specialsData,
						method: 'get',
						dataType: 'json'
					}).then(function (specialsBoxData) {

						var specialsDataPull = {
								specialsBoxData : specialsBoxData
							};

					console.log(specialsDataPull);


			// var menuFormTemplate = $("#menuFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
			// var formHTML = Mustache.render(specialsFormTemplate,specialsDataPull);
			// $("#theForm").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

			// var specialsFormTemplate = $("#specialsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
			// var formHTML = Mustache.render(specialsFormTemplate, specialsDataPull);
			// $("#theForm").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		});

		});

	};

// retreive menu data from server


});
