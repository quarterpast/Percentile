Array.prototype.percentile = function(cents,get,comp) {
	get  = typeof get  === "function" ? get  : function(a){return a};
	comp = typeof comp === "function" ? comp : function(a,b){return a-b};
	var sort = this.map(get).sort(comp),
	    len  = sort.length,
	    min  = sort[0],
	    max  = sort[len-1],
	    one  = (max-min)/100,
	    out  = [];

	for(var i=0; i<len; i++) {
		
	}
	return out;
}