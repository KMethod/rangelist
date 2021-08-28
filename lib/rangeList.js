'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function RangeList() {
    _classCallCheck(this, RangeList);

    this.rangeList = [];
  }

  /**
    * Adds a range to the list
    * @param {Array<number>} range - Array of two integers that specify
      beginning and end of range.
    */


  _createClass(RangeList, [{
    key: 'add',
    value: function add(range) {
      var res = [];
      var i = 0;
      var rangeList = this.rangeList;
      var len = rangeList.length;

      // get no overlap
      while (i < len && rangeList[i][1] < range[0]) {
        res.push(rangeList[i]);
        i++;
      }

      // update overlap
      while (i < len && rangeList[i][0] <= range[1]) {
        range[0] = Math.min(range[0], rangeList[i][0]);
        range[1] = Math.max(range[1], rangeList[i][1]);
        i++;
      }

      res.push(range);

      // insert left
      while (i < len) {
        res.push(rangeList[i]);
        i++;
      }

      this.rangeList = res;
    }

    /**
      * Removes a range from the list
      * @param {Array<number>} range - Array of two integers that specify
      beginning and end of range.
      */

  }, {
    key: 'remove',
    value: function remove(range) {
      var rangeList = this.rangeList;
      // sort
      rangeList.sort(function (a, b) {
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
      });

      var res = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = rangeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var inter = _step.value;

          // no overlap
          if (inter[0] >= range[1] || inter[1] <= range[0]) res.push(inter);else {
            // update overlap
            if (inter[0] < range[0]) res.push([inter[0], range[0]]);
            if (inter[1] > range[1]) res.push([range[1], inter[1]]);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.rangeList = res;
    }

    /**
      * Prints out the list of ranges in the range list
      */

  }, {
    key: 'print',
    value: function print() {
      var res = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.rangeList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          res.push('[' + item[0] + ', ' + item[1] + ')');
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return res.join(' ');
    }
  }]);

  return RangeList;
}();