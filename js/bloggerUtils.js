
// All the code is public domain, completely open source
// feel free to re-use as you desire. Attribution is
// appreciated but not required. To attribute, please link
// to the GitHub project URL:


var bloggerUtils = {
	
	// Replaces a blog post with a summary. Length of summary is defaulted to 700 characters
	// unless overridden by supplied parameter. If the post has images, then it only retains
	// the first image as part of the summary.
	// This can be used to dynamically include a "Read more" link instead
	// of showing the full post. This avoids the need to but a break in the post while writing
	// it giving better control and consistency.
	// @parameter postContentElementId: HTML container element that contains post content.
	// @parameter summaryLength: how long the summary should be
	replacePostWithSummary: function(postContentElementId, summaryLength) {

		if (!postContentElementId || postContentElementId.trim().length < 1) {
			alert('bloggerUtils.replacePostWithSummary() expects non-empty value for: postContentElementId');
			return; // can't continue
		}
		
		if (!summaryLength || summaryLength == 0) {
			summaryLength = 400;
		}
		
		var doesPostContainHeaderImage = false;
		var postContainer = document.getElementById(postContentElementId);
		
		if (!postContainer) {
			alert('bloggerUtils.replacePostWithSummary() couldn\'t find element with id: ' + postContentElementId);
			return; // can't continue
		}
		
		var postText = postContainer.innerText || postContainer.textContent || "";
		
		var images = [0];
		
		if (postContainer.children && postContainer.children.length > 0) {
			images = imageUtils.getImagesFromElement(postContainer);
			doesPostContainHeaderImage = (images.length > 0) ? true : false;
		}
		
		var croppedPostText = "";
		if (postText.length > 0) {
			croppedPostText = (postText.length < summaryLength) ? postText : postText.substring(0,summaryLength);
		} 
		
		var summary = (doesPostContainHeaderImage) ? "<div><img src=\"" +images[0].src+" alt=\""+images[0].alt+" width=\""+images[0].width+" height=\""+images[0].height+" />" : "<div>";
		summary = summary + croppedPostText + "...</div>";
		
		postContainer.innerHTML = summary;
	}
};

//-->