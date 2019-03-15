'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Element = function Element(name, buildYear) {
    _classCallCheck(this, Element);

    this.name = name;
    this.buildYear = buildYear;
};

var Park = function (_Element) {
    _inherits(Park, _Element);

    function Park(name, buildYear, area, numTrees) {
        _classCallCheck(this, Park);

        var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, buildYear));

        _this.area = area; //km2
        _this.numTrees = numTrees;
        return _this;
    }

    _createClass(Park, [{
        key: 'treeDensity',
        value: function treeDensity() {
            var density = this.numTrees / this.area;
            console.log(this.name + ' has a tree density of ' + density + ' trees per square km.');
        }
    }]);

    return Park;
}(Element);

var Street = function (_Element2) {
    _inherits(Street, _Element2);

    function Street(name, buildYear, length) {
        var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

        _classCallCheck(this, Street);

        var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, buildYear));

        _this2.length = length;
        _this2.size = size;
        return _this2;
    }

    _createClass(Street, [{
        key: 'classifyStreet',
        value: function classifyStreet() {
            var classification = new Map();
            classification.set(1, 'tiny');
            classification.set(2, 'small');
            classification.set(3, 'normal');
            classification.set(4, 'big');
            classification.set(5, 'huge');
            console.log(this.name + ', build in ' + this.buildYear + ', is a ' + classification.get(this.size) + ' street.');
        }
    }]);

    return Street;
}(Element);

var allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];

var allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {

    var sum = arr.reduce(function (prev, cur, index) {
        return prev + cur;
    }, 0);

    return [sum, sum / arr.length];
}

function reportParks(p) {

    console.log('-----PARKS REPORT-----');

    // Density
    p.forEach(function (el) {
        return el.treeDensity();
    });

    // Average age
    var ages = p.map(function (el) {
        return new Date().getFullYear() - el.buildYear;
    });

    var _calc = calc(ages),
        _calc2 = _slicedToArray(_calc, 2),
        totalAge = _calc2[0],
        avgAge = _calc2[1];

    console.log('Our ' + p.length + ' parks have an average of ' + avgAge + ' years.');

    // Which park has more than 1000 trees
    var i = p.map(function (el) {
        return el.numTrees;
    }).findIndex(function (el) {
        return el >= 1000;
    });
    console.log(p[i].name + ' has more than 1000 trees.');
}

function reportStreets(s) {

    console.log('-----STREETS REPORT-----');

    //Total and average length of the town's streets

    var _calc3 = calc(s.map(function (el) {
        return el.length;
    })),
        _calc4 = _slicedToArray(_calc3, 2),
        totalLength = _calc4[0],
        avgLength = _calc4[1];

    console.log('Our ' + s.length + ' streets have a total length of ' + totalLength + ' km, with an average of ' + avgLength + ' km.');

    // CLassify sizes
    s.forEach(function (el) {
        return el.classifyStreet();
    });
}

reportParks(allParks);
reportStreets(allStreets);
