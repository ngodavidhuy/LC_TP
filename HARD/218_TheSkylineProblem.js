/* 
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).

Buildings  Skyline Contour
The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

For instance, the dimensions of all buildings in Figure A are recorded as: [ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

The output is a list of "key points" (red dots in Figure B) in the format of [ [x1,y1], [x2, y2], [x3, y3], ... ] that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

For instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].

Notes:

The number of buildings in any input list is guaranteed to be in the range [0, 10000].
The input list is already sorted in ascending order by the left x position Li.
The output list must be sorted by the x position.
There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...[2 3], [4 5], [7 5], [11 5], [12 7]...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...[2 3], [4 5], [12 7], ...]

*/

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
class Point {
  constructor(height, location, start) {
    this.height = height;
    this.location = location;
    this.start = start;
  }

  isStart() {
    return this.start;
  }

  getHeight() {
    return this.height;
  }

  getLocation() {
    return this.location;
  }

  compareTo(otherPoint) {
    if (this.location === otherPoint.getLocation()) {
      return this.start ? -1 : 1;
    }
    return this.location > otherPoint.getLocation() ? 1 : -1;
  }
}

class BuildingMap {
  constructor() {
    this.map = new Map();
  }

  put(height) {
    let keypair = this.map.get(height);
    if (keypair === undefined) {
      this.map.set(height, 1);
    } else {
      this.map.set(height, keypair + 1);
    }
  }

  remove(height) {
    if (!this.map.has(height)) return;
    this.map.set(height, this.map.get(height) - 1);
    if (this.map.get(height) <= 0) this.map.delete(height);
  }

  getMax() {
    let max = 0;
    for (let [height] of this.map) {
      if (height > max) max = height;
    }
    return max;
  }
}

function getSkyline(buildings) {
  let points = [];
  let skyline = [];
  for (let building of buildings) {
    points.push(new Point(building[2], building[0], true));
    points.push(new Point(building[2], building[1], false));
  }

  points = points.sort((a, b) => {
    if (a.getLocation() === b.getLocation()) {
      if (a.getHeight() === b.getHeight()) {
        return b.isStart() - a.isStart();
      } else if (a.isStart() === true && (a.isStart() === b.isStart())) {
        return b.getHeight() - a.getHeight();
      } else if (a.isStart() === false && (a.isStart() === b.isStart())) {
        return a.getHeight() - b.getHeight();
      } else {
        return b.isStart() - a.isStart();
      }
    } else {
      return a.getLocation() - b.getLocation();
    }
  });


  let buildingMap = new BuildingMap();
  let currentMax = 0;
  let currentLocation = 0;

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    if (p.isStart()) {
      buildingMap.put(p.getHeight());
      if (p.getHeight() > currentMax) {
        skyline.push([p.getLocation(), p.getHeight()]);
        currentMax = p.getHeight();
        currentLocation = p.getLocation();
      }
    } else {
      buildingMap.remove(p.getHeight());
      if (currentMax === p.getHeight()) {
        currentMax = buildingMap.getMax();
        currentLocation = p.getLocation();
        if (currentMax === p.getHeight()) {
          continue;
        } else {
          skyline.push([currentLocation, currentMax]);
        }
      }
    }
  }

  return skyline;
};



console.log(getSkyline([ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ]));
console.log(getSkyline([[0,2,3], [2,5,3]]));
console.log(getSkyline([[1,2,1],[1,2,2],[1,2,3]]));
console.log(getSkyline([[2,9,10],[9,12,15]]));





