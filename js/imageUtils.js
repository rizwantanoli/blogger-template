
var imageUtils = {
	// Gets all images that are within the contained
	// HTML element. Recursively looks through child
	// elements as well to get images i.e. IMG tag
	getImagesFromElement: function(element) {
		var images = [];
		
		for (var i = 0; i < element.children.length; i++) 
		{
			if (element.children[i].tagName == 'IMG') {
				images.push(element.children[i]);
			} else {
				images.push.apply(images,this.getImagesFromElement(element.children[i]));
			}
		}
		
		return images;
	}
};