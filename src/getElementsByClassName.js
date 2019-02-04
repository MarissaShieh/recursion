// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var foundEle = [];
	var traverseNodes = function(node){
		if (node.classList && node.classList.contains(className)){
			foundEle.push(node)
		}
		if (node.childNodes){
			node.childNodes.forEach(function(innerNode){
				traverseNodes(innerNode);
			});
		}
	}
	traverseNodes(document.body);	
	return foundEle;
};