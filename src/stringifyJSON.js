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
	      return "[]"; //'[]'
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
		  		keysArr.push('"' + key + '"');
          if (obj[key] instanceof Object){
            valuesArr.push(stringifyJSON(obj[key]));
          } else if (typeof obj[key] === "string"){
            valuesArr.push('"'+obj[key]+'"');
          } else {
            valuesArr.push(obj[key]);
          }
		  	}
		  	for (let i = 0; i<keysArr.length-1; i++){
		  		returnedItem = returnedItem + keysArr[i] + ":" + valuesArr[i] + ",";
		  	}
		  	returnedItem = returnedItem + keysArr[keysArr.length-1] + ":" + valuesArr[keysArr.length-1]
		  	return "{" + returnedItem + "}";
	  	}
	  }
};

	// } else if
	// else if (typeof obj === "object"){
	// 	return objString + objArr + "'}'";
	// }
