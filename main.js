$(document).ready (function() {



//  OUR STORY tab *******************************************************************************
//***********************************************************************************************
	var aboutData = {
		data: data
	};

	var aboutFormTemplate = $("#aboutFormTemplate").text();

	var aboutHTML = Mustache.render(aboutFormTemplate, aboutData);

	$("#tab1").html(aboutHTML);
//************************************************************************
//***********************************************************************



	// NEWS div content       ***************************************************************
	//****************************************************************************************

		var newsData = "http://79.170.44.100/piccolimorsi.com/news.json";

		$.ajax({
			url: newsData,
			method: 'get',
			dataType: 'json'
		}).then(function (newsBoxData) {

			var newsDataPull = {
				data : newsBoxData
			};

		var newsFormTemplate = $("#newsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var formHTML = Mustache.render(newsFormTemplate, newsDataPull);
		$("#news").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML
	});

	// SPECIALS data for content    **********[!!!MAIN MENU IS NESTED UNDER SPECIALS API CALL!!]***********
	//*********************************************************************************************
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

//   MAIN (food) MENU HERE **********************************************************************
			var menuData = "http://79.170.44.100/piccolimorsi.com/menu.json";

			$.ajax({
				url: menuData,
				method: 'get',
				dataType: 'json'
			}).then(function (menuBoxData) {

				var menuDataPull = {
					menuBoxData: menuBoxData
				};



				var appetizers = {
					appetizers: menuBoxData.Appetizers
				};
				console.log(appetizers);
				var salads = {
					salads: menuBoxData.Salads
				};
				console.log(salads);
				var soups =  {
					soups: menuBoxData.Soups
				};
				console.log(soups);
				var mains = {
					mains: menuBoxData.Mains
				};
				console.log(mains);
				var drinks = {
					drinks: menuBoxData.Drinks
				};
				console.log(drinks);
				var desserts = {
					desserts: menuBoxData.Desserts
				};
				console.log(desserts);
				var CaneCucina = {
					CaneCucina: menuBoxData.CaneCucina
				};
				console.log(CaneCucina);

		var appetizerFormTemplate = $("#appetizerFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var appetizerHTML = Mustache.render(appetizerFormTemplate, appetizers);
		$("#appetizers").html(appetizerHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var saladFormTemplate = $("#saladFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var saladHTML = Mustache.render(saladFormTemplate, salads);
		$("#salads").html(saladHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var soupFormTemplate = $("#soupFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var soupHTML = Mustache.render(soupFormTemplate, soups);
		$("#soups").html(soupHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var mainFormTemplate = $("#mainFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var mainHTML = Mustache.render(mainFormTemplate, mains);
		$("#mains").html(mainHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var drinkFormTemplate = $("#drinkFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var drinkHTML = Mustache.render(drinkFormTemplate, drinks);
		$("#drinks").html(drinkHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var dessertFormTemplate = $("#dessertFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var dessertHTML = Mustache.render(dessertFormTemplate, desserts);
		$("#desserts").html(dessertHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

		var dogFormTemplate = $("#dogFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
		var dogHTML = Mustache.render(dogFormTemplate, CaneCucina);
		$("#dogs").html(dogHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML


// This generates the "Today's Specials" box in the middle of the 'api-panel' div ***********************
// ***[uses 'theSpecial' var from above]**************************************************************************************************
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

			});

		});



// retreive menu data from server


});
