
$(document).ready (function() {

var itemToImageMap = {
    18: 'assets/restaurantphotos/pizza2.jpg'
};

$(".nav-tabs > li > a").click(function(event) {
    event.preventDefault();

var active_tab_selector = $(".nav-tabs > li.active > a").attr("href");

var actived_nav = $(".nav-tabs > li.active");
actived_nav.removeClass("active");

$(this).parents("li").addClass("active");

$(active_tab_selector).removeClass("active");
$(active_tab_selector).addClass("hide");

var target_tab_selector = $(this).attr("href");
$(target_tab_selector).removeClass("hide");
$(target_tab_selector).addClass("active");

});
function rotateImages() {
	 var curDiv = $('#hero div.current');
	 var nextDiv = curDiv.next();
	 if (nextDiv.length === 0) {
		nextDiv = $('#hero div:first');
	}

	 curDiv.removeClass('current').addClass('previous');
	 nextDiv.css({ opacity: 0.0 });
	 nextDiv.addClass('current');
	 nextDiv.animate({ opacity: 1.0 },
	 					1000,
						 function() {
							curDiv.removeClass('previous');
						});
}

	 $(function() {
			 // create the image rotator
			 setInterval(rotateImages, 3000);
	 });





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

				var salads = {
					salads: menuBoxData.Salads
				};

				var soups =  {
					soups: menuBoxData.Soups
				};

				var mains = {
					mains: menuBoxData.Mains
				};

				var drinks = {
					drinks: menuBoxData.Drinks
				};

				var desserts = {
					desserts: menuBoxData.Desserts
				};

				var CaneCucina = {
					CaneCucina: menuBoxData.CaneCucina
				};
				

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
							td: td,
                            "imgsrc": itemToImageMap[td.id]
						};

                        console.log(todaysSpecial);

						var specialsFormTemplate = $("#specialsFormTemplate").text();   //CHANGE THE NAME OF THE ID BASED ON HTML
						var formHTML = Mustache.render(specialsFormTemplate, todaysSpecial);
						$("#special").html(formHTML);  //CHANGE THE NAME OF THE ID BASED ON HTML

			});

		});
});
