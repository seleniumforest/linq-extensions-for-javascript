//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
// https://github.com/mguler/linq-extensions-for-javascript
// Extensions
function ApplyLinqExtensions() {

    Array.prototype.select = function (func) {
        var result = [];
        for (var index = 0; index < this.length; index++) {
            result.push(func(this[index], index));
        }
        return result;
    }

    Array.prototype.selectMany = function (func) {
        var result = [];
        for (var index = 0; index < this.length; index++) {
            var arr = func(this[index], index);
            for (var index2 = 0; index2 < arr.length; index2++) {
                result.push(arr[index2]);
            }
        }
        return result;
    }

    Array.prototype.single = function (func, _default) {
        for (var index = 0; index < this.length; index++) {
            if (func(this[index], index) == true) {
                return this[index];
            }
        }
        return _default;
    }

    Array.prototype.any = function (func) {
        if (typeof (func) !== "function")
            return this.length > 0;

        for (var index = 0; index < this.length; index++) {
            if (func(this[index], index) == true) {
                return true;
            }
        }

        return false;
    }

    Array.prototype.each = function (func) {
        var result = false;

        for (var index = 0; index < this.length; index++) {
            result = result || func(this[index], index);
        }

        return result;
    }

    Array.prototype.count = function (func) {
        if (typeof (func) !== "function")
            return this.length;

        var count = 0;
        for (var index = 0; index < this.length; index++) {
            if (func(this[index], index) == true) {
                count++;
            }
        }
        return count;
    }

    Array.prototype._concat = function (func) {
        var result = "";
        for (var index = 0; index < this.length; index++) {
            result += func(this[index], index);
        }
        return result;
    }

    Array.prototype.first = function (func, _default) {
        if (typeof (func) !== "function")
            return this[0] || _default;

        for (var index = 0; index < this.length; index++) {
            if (func(this[index], index) == true) {
                return this[index];
            }
        }
        return _default;
    }

    Array.prototype.last = function (func, _default) {
        if (typeof (func) !== "function")
            return this[this.length - 1] || _default;

        var result;
        for (var index = 0; index < this.length; index++) {
            if (func(this[index], index) == true) {
                result = this[index];
            }
        }
        return result ? result : _default;
    }

    Array.prototype.max = function (func) {
        if (typeof (func) !== "function")
            return Math.max.apply(null, this);

        var mapped = [];
        for (var index = 0; index < this.length; index++) {
            mapped.push(func(this[index], index));
        }
        return Math.max.apply(null, mapped);
    };

    Array.prototype.min = function (func) {
        if (typeof (func) !== "function")
            return Math.min.apply(null, this);

        var mapped = [];
        for (var index = 0; index < this.length; index++) {
            mapped.push(func(this[index], index));
        }
        return Math.min.apply(null, mapped);
    };

    Array.prototype.sum = function (func) {
        if (typeof (func) !== "function")
            return this.reduce((pv, cv) => pv + cv, 0);

        var mapped = [];
        for (var index = 0; index < this.length; index++) {
            mapped.push(func(this[index], index));
        }
        
        return mapped.reduce((pv, cv) => pv + cv, 0);
    }
};

module.exports = ApplyLinqExtensions;

// End Of Extensions
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
