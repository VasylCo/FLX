function findTypes() {
    var result = [];
    for (var key in arguments) {
        result.push(typeof (arguments[key]));
    }
    return (result);
}
function executeforEach(arr, fun) {
    for (var key in arr) {
        fun(arr[key]);
    }
}
function mapArray(arr, fun) {
    var resultArray = [];
    executeforEach(arr, function (element) {
        resultArray.push(fun(element));
    })
    return resultArray;
}
function filterArray(arr, fun) {
    var filteredArray = [];
    executeforEach(arr, function (element) {
        if (fun(element)) {
            filteredArray.push(element);
        }
    })
    return filteredArray;
}
function getAmountOfAdultPeople(data) {
    var ages = [];
    for (var key in data) {
        ages.push(data[key].age);
    }
    var result = filterArray(ages, function (element) {
        return element > 18;
    })
    return result.length;
}
function getGreenAdultBananaLovers(data) {
    var peoples = [];
    for (var key in data) {
        var result = filterArray(data[key], function () {
            return (data[key].eyeColor === "green" && data[key].favoriteFruit === "banana" && data[key].age > 18);
        });
        if (result.length > 0) {
            peoples.push(result);
        }
    }
    var names = mapArray(peoples, function (element) {
        return element[4];
    })
    console.log(peoples);
    console.log(names);
}
function keys(obj) {
    var result = [];
    for (var key in obj) {
        result.push(key);
    }
    return result;
}
function values(obj) {
    var result = [];
    for (var key in obj) {
        result.push(obj[key]);
    }
    return console.log(result);
}
function showFormattedDate(date) {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return console.log("Date: " + date.getDate() + " of " + month[date.getMonth()] + ", " + date.getFullYear());
}
function isEvenYear(date) {
    return console.log(date.getFullYear() % 2 === 0);
}
function isEvenMonth(date) {
    console.log(date.getMonth());
    return console.log(date.getMonth() + 1 % 2 === 0);
}
var data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
]
isEvenMonth(new Date('2019-03-27T01:10:00'))
isEvenYear(new Date('2019-01-27T01:10:00')) 
showFormattedDate(new Date('2019-01-27T01:10:00'))  
values({ keyOne: 1, keyTwo: 2, keyThree: 3 }) 
keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }) 
getGreenAdultBananaLovers(data)   
getAmountOfAdultPeople(data) 
filterArray([2, 5, 8], function (el) {
    return el > 3
}) 
mapArray([2, 5, 8], function (el) {
    return el + 3
}) 
executeforEach([1, 2, 3], (el) => (console.log(el)));
alert(findTypes("number"));
alert(findTypes(null, 5, "hello")); 
