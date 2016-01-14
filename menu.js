var menu = {
"appetizers": [

    {
        "id": 1,
        "item": "Mozzarella Caprese",
        "price": 2,
        "description": "A Magnificent Dish Made with Fresh and Organic Tomatoes",
        "local fav": 1,
        "low sodium": 1,
        "under 500 cals": 1
    },
    {
        "id": 2,
        "item": "Cheese Platter",
        "price": 3,
        "description": "Five Different Options of Exquisite Cheeses Chosen by our Chef",
        "local fav": 0,
        "low sodium": 0,
        "under 500 cals": 1
    },
    {
        "id": 3,
        "item": "Traditional Antipasto",
        "price": 3,
        "description": "Tasty and Unique House Recipe",
        "local fav": 1,
        "low sodium": 0,
        "under 500 cals": 1
    }
    ],

    "salads": [

    {
        "id": 4,
        "item": "Side Salad",
        "price": 3,
        "description": "Side Salad",
        "local fav": 0,
        "low sodium": 1,
        "under 500 cals": 1
    },

    {
        "id": 5,
        "item": "House Salad",
        "price": 6,
        "description": "House Salad",
        "local fav": 0,
        "low sodium": 1,
        "under 500 cals": 1
    },
    {
        "id": 6,
        "item": "Chicken Caesar Salad",
        "price": 7,
        "description": "Chicken Caesar Salad",
        "local fav": 1,
        "low sodium": 0,
        "under 500 cals": 0
    },
    {
        "id": 7,
        "item": "Chef Salad",
        "price": 7,
        "description": "Chef Salad",
        "local fav": 0,
        "low sodium": 1,
        "under 500 cals": 1
    }
    ],

    "soups": [

    {
        "id": 8,
        "item": "Baked Potato",
        "price": {
        "cup": 3,
        "bowl": 5
        }
       }
    ],

    "drinks": [

    {
        "id": 9,
        "item": "Bottled Water",
        "price": 1,
        "description": "Bottled Water",
        "local fav": 0,
        "low sodium": 1,
        "under 500 cals": 1
    },
    {
        "id": 10,
        "item": "Canned Soda",
        "price": 1,
        "description": "Canned Soda",
        "local fav": 0,
        "low sodium": 0,
        "under 500 cals": 0
    },
    {
        "id": 11,
        "item": "Peach Tea",
        "price": 2,
        "description": "Peach Tea"
    },
    {
        "id": 12,
        "item": "House Vine",
        "price": 1,
        "description": "Red Cabernet Sauvignon",
        "local fav": 0,
        "low sodium": 0,
        "under 500 cals": 0
    },
    {
        "id": 13,
        "item": "House Vine",
        "price": 1,
        "description": "White Chardonnay",
        "local fav": 0,
        "low sodium": 0,
        "under 500 cals": 0
    }
    ],

    "desserts": [
    {
        "id": 14,
        "item": "(3) Chocolate Chip Cookies",
        "price": 1,
        "description": "Chocolate Chip/Oatmeal Raisin Cookies",
        "local fav": 0,
        "low sodium": 0,
        "under 500 cals": 0
    },
    {
        "id": 15,
        "item": "(3) Gelato",
        "price": 1,
        "description": "Strawberry Vanilla",
        "local fav": 1,
        "low sodium": 0,
        "under 500 cals": 0
    },
    {
        "id": 16,
        "item": "Banana Pudding",
        "price": 4,
        "description": "Banana Pudding",
        "local fav": 0,
        "low sodium": 0,
        "under 500 cals": 0
    }
    ],

    "Mains":[
    {
        "id": 17,
        "item": "Pizza Margherita",
        "price": 2,
        "description": "San Marzano Sauce, Mozzarella Cheese",
        "local fav": 0,
        "low sodium": 1,
        "under 500 cals": 1
    },
    {
        "id": 18,
        "item": "Pizza Bianca",
        "price": 2,
        "description": "Mozzarella Cheese, Arugula Prosciutto San Daniele",
        "local fav": 0,
        "low sodium": 1,
        "under 500 cals": 1

    },
    {
        "id": 19,
        "item": "Pizza Salisiccia",
        "price": 2,
        "description": "San Marzano Sauce, Fennel, Pine Nuts",
        "local fav": 1,
        "low sodium": 1,
        "under 500 cals": 1
    },
    {
        "id": 20,
        "item": "Lasagna",
        "price": 3,
        "description": "The Traditional Italian Favorite with Sausage and Ricotta",
        "local fav": 0,
        "low sodium": 0,
        "under 500 cals": 1
    }
    ],

    "CaneCucina":[
        {
        "id": 21,
        "item": "Piccoli Cane Meatballs",
        "price": 2,
        "description": "Meat Sauce, Mozzarella Cheese",
        "local fav": 0,
        "low sodium": 1,
        "under 500 cals": 1
    },
    {
        "id": 22,
        "item": "Cane Gelato and Biscuits",
        "price": 2,
        "description": "Canes Favorite",
        "local fav": 0,
        "low sodium": 1,
        "under 500 cals": 1
    },
    {
        "id": 23,
        "item": "Cane Yogurt",
        "price": 2,
        "description": "Natural flavor",
        "local fav": 1,
        "low sodium": 1,
        "under 500 cals": 1
    },
    {
        "id": 24,
        "item": " Cane Chickenballs",
        "price": 3,
        "description": "Chef's Favorite",
        "local fav": 0,
        "low sodium": 0,
        "under 500 cals": 1
    }
    ]
  };

  for(var course in menu){
    console.log(course);
  }
