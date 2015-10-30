$(document).ready (function() {


	var aboutData = {
		data: data
	};

	console.log(aboutData);

	var aboutFormTemplate = $("#aboutFormTemplate").text();

	var aboutHTML = Mustache.render(aboutFormTemplate, aboutData);

	$("#tab1").html(aboutHTML);




	// retrieve newsletter data

		var newsData = "http://79.170.44.100/piccolimorsi.com/news.json";

		$.ajax({
			url: newsData,
			method: 'get',
			dataType: 'json'
		}).then(function (newsBoxData) {

			var newsDataPull = {
				data : newsBoxData
			};
			console.log(newsDataPull);
		var newsFormTemplate = $("#newsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var formHTML = Mustache.render(newsFormTemplate, newsDataPull);
		$("#news").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML
	});

	// retrieve specials data
	var specialsData = "http://79.170.44.100/piccolimorsi.com/special.json";

		$.ajax({
			url: specialsData,
			method: 'get',
			dataType: 'json'
		}).then(function (specialsBoxData) {

			var specialsDataPull = {
					specialsBoxData: specialsBoxData
				};

			var theSpecial = specialsBoxData.menu_item_id;


			var menuData = "http://79.170.44.100/piccolimorsi.com/menu.json";

			$.ajax({
				url: menuData,
				method: 'get',
				dataType: 'json'
			}).then(function (menuBoxData) {

				var menuDataPull = {
					menuBoxData: menuBoxData
				};

				var menuSpecial = menuBoxData.Mains.filter(function(item){
					if (item.id === theSpecial) {
						return true;
					} else {
						return false;
					}
				});
				var td = menuSpecial[0];

				var todaysSpecial = {
					td: td
					};

				var specialsFormTemplate = $("#specialsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
				var formHTML = Mustache.render(specialsFormTemplate, todaysSpecial);
				$("#special").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML


			// var menuFormTemplate = $("#menuFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
			// var formHTML = Mustache.render(specialsFormTemplate,specialsDataPull);
			// $("#theForm").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML



			});

		});



// retreive menu data from server


});
