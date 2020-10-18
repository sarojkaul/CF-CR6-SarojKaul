var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var array = [];
var locations = /** @class */ (function () {
    function locations(name, address, image) {
        this.name = name;
        this.address = address;
        this.image = image;
        array.push(this);
    }
    locations.prototype.render = function () {
        return "<div class=\"card col-md-6 col-lg-3 border bg-light\">\n        <img class=\"card-img-top p-2\" src=\"" + this.image + "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Name: " + this.name + "</h5>\n            <p class=\"card-text\">City: " + this.address + "</p>\n        </div>\n        \n    </div>";
    };
    return locations;
}());
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(name, address, image, site) {
        var _this = _super.call(this, name, address, image) || this;
        _this.site = site;
        return _this;
    }
    restaurant.prototype.render = function () {
        return "\n<div class=\"card col-md-6 col-lg-3 border bg-light\">\n        <img class=\"card-img-top p-2\" src=\"" + this.image + "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Name: " + this.name + "</h5>\n            <p class=\"card-text\">Address: " + this.address + "</p>\n            <p><a href=\"" + this.site + "\">" + this.site + "</a></p>\n        </div>\n       \n</div>\n    ";
    };
    return restaurant;
}(locations));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, address, image, date, time, price, link) {
        var _this = _super.call(this, name, address, image) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        _this.link = link;
        return _this;
    }
    events.prototype.render = function () {
        return "\n        <div class=\"card col-md-6 col-lg-3 border bg-light\">\n        <img class=\"card-img-top p-2\" src=\"" + this.image + "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Name: " + this.name + "</h5>\n            <p class=\"card-text\">Address: " + this.address + "</p>\n            <p>Event_place: " + this.date + "</p>\n            <p>Event_time: " + this.time + "</p>\n            <p>Ticket_Price: " + this.price + "Eur</p>\n                <p><a href=\"" + this.link + "\">" + this.link + "</a></p>\n        </div>\n       \n</div>\n        ";
    };
    return events;
}(locations));
new locations('St. Charles Church', 'Karlsplatz 1, 1010 Vienna', 'img/1.jpg');
new locations('Zoo Vienna', 'Maxingstraße 13b, 1130 Wien', 'img/2.jpg');
new restaurant('Lemon Leaf Thai Restaurant', 'Kettenbrückengasse 19, 1050 Vienna, +43(1)5812308', 'img/3.jpg', 'www.lemonleaf.at');
new restaurant('SIXTA', '1050 Wien, Schönbrunner Straße 21 ,  +43 1 58 528 56', 'img/4.jpg', 'http://www.sixta-restaurant.at/');
new events('Kris Kristofferson', 'Wiener Stadthalle,1150 Wien', 'img/5.jpg', '15.11.2021', '22:00', '58', 'http://kriskristofferson.com/');
new events('Lenny Kravitz', 'Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien', 'img/6.jpg', '09.12.2029', '22:00', '47', 'www.lennykravitz.com/');
for (var x in array) {
    $("#travel").append(array[x].render());
}
