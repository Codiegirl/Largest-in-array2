function largestOfFour(arr) {
    var maxes = [0,0,0,0];
    for (var i = 0; i<arr.length; i++){
      for (var j = 0; j<arr[i].length; j++){
        currentElement = arr[i][j];
        if(currentElement>=maxes[i]){
          maxes[i] = currentElement
        }
        
      }
        
    }
        return maxes
  }
  
  largestOfFour([[4,5,1,3], [13,27,18,26], [32,35,37,39], [900, 857,1,100]])