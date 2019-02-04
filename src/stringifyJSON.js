// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var keysArr = [];
	var valuesArr = [];
	var returnedItem = "";

	if (typeof obj === "number" || typeof obj === "boolean"){ 
		return obj.toString();
	} 
	else if (typeof obj === "string"){
    	return '"' + obj + '"';
	}
	else if (obj === NaN || obj === null || obj === Infinity){
		return "null";
	}
	else if (Array.isArray(obj)){
	    if (obj[0] === undefined){
	      return "[]"; 
	    } 
	    else {
	      obj.forEach(function(ele){
	        valuesArr.push(stringifyJSON(ele));
	      });
	    }
	  	return "[" + valuesArr + "]";
	  }
	  else if (typeof obj === "object") {
	  	if (Object.keys(obj).length === 0){
	  		return "{}";
	  	}
	  	else {
	  		for (let key in obj){
	  			if (typeof obj[key] === "function" || typeof obj[key] === "undefined"){
	  			} else {
	  				keysArr.push('"' + key + '"');
		          if (obj[key] instanceof Object){
		            valuesArr.push(stringifyJSON(obj[key]));
		          } else if (typeof obj[key] === "string"){
		            valuesArr.push('"'+obj[key]+'"');
		          } else {
		            valuesArr.push(obj[key]);
		          }
	  			}
		  	}
		  	for (let i = 0; i<keysArr.length; i++){
		  		returnedItem = returnedItem + keysArr[i] + ":" + valuesArr[i] + ",";
		  	}
		  	if (returnedItem.length >0){
		  		returnedItem = returnedItem.slice(0,-1);
		  	}
		  	return "{" + returnedItem + "}";
	  	}
	  }
};
