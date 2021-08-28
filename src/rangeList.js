module.exports = class RangeList {
    
    constructor() {
      this.rangeList = [];
    }


    /**
      * Adds a range to the list
      * @param {Array<number>} range - Array of two integers that specify
        beginning and end of range.
      */
    add(range) {
      const res = [];
      let i = 0;
      const rangeList = this.rangeList;
      const len = rangeList.length;

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
    remove(range) {
      const rangeList = this.rangeList;
      // sort
      rangeList.sort((a,b)=>a[0] === b[0] ? a[1] - b[1] : a[0] - b[0] );

      let res = [];
      for (let inter of rangeList) {
          // no overlap
          if (inter[0] >= range[1] || inter[1] <= range[0]) res.push(inter);
          else {
              // update overlap
              if (inter[0] < range[0]) res.push([inter[0], range[0]]);
              if (inter[1] > range[1]) res.push([range[1], inter[1]]);
          }
      }
      this.rangeList = res;
    }

    /**
      * Prints out the list of ranges in the range list
      */
    print() {
      const res = [];
      for (let item of this.rangeList) {
        res.push(`[${item[0]}, ${item[1]})`)
      }
      return res.join(' ');
    }
}
