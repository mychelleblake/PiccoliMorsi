var menu = {
	"soups": [
		{
				"name": "chicken",
				"price": {
					"cup": 2,
					"bowl": 4
				}
		},
		{
			"name": "minestrone",
			"price": {
				"cup": 2,
				"bowl": 4
			}
		}
	],nuts": [
		{
			"name": "walnut",
			"price": 2
		},
		{
			"name": "hazelnut",
			"price": 1.5
		}
	]
};


var cats = function(menu) {
	for (var key in menu){
		course = key;
	var courseList = menu[course].map(function(item){
		return {

			name: item.name,
			price: item.price,
		};
	});
	}
};

console.log(cats(menu));



var list = menu.nuts.map(function(item){
	return {
		name: item.name,
		price: item.price
	};
});

// console.log(list);
