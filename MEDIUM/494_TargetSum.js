var findTargetSumWays = function(nums, S) {
    
    if(num) return 1;
    if(S === null) return null;
    REDO THIS
    
    const helper = function (nums,i,sum,cache){
	    //memoization make this run faster when lots of repeating input
        let key = i + "," + sum;
        if(cache.has(key)){ return cache.get(key); }
        if(i === nums.length){  return sum === S ? 1 : 0;}

        let ways = helper(nums,i+1,sum + nums[i],cache) + helper(nums,i+1,sum - nums[i],cache);
        cache.set((i + ',' + sum), ways);
       
        return ways;
    }
    
    return helper(nums,0,0,new Map());
    
 }

 debugger; findTargetSumWays([1,1,1,1,1], 3)