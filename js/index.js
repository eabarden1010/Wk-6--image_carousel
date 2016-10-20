// set up variables (imagesArray and imageIndex)
var imagesArray = ["images/animals/animal1.jpg","images/animals/animal2.jpg",
"images/animals/animal3.jpg","images/animals/animal4.jpg", "images/animals/animal5.jpg", "images/animals/animal6.jpeg"];
var imageIndex = 0;
// create a function to find the prev image

// if prev index is greater than 0 than it's valid else set to last image in array
function prevImage(){
	if (imageIndex > 0){	
		imageIndex--;
	} else {
		imageIndex = 5;
	}	
	
	$("#main-image").attr("src", imagesArray[imageIndex]);
}

// create a function to find the next image
// if next index is less than the length than it's valid else set to first image in array
function nextImage (){
	if (imageIndex < imagesArray.length) {
		imageIndex++;
	} else {
		imageIndex = 0;
	}	

	$("#main-image").attr("src", imagesArray[imageIndex]);
}

// on click next or prev find the next or prev image (using the functions created)
$(".next").on("click",nextImage);
$(".prev").on("click",prevImage);

//create if statements to check if the updated index is last in the array
//if not update: imgindex, if it is the last index, update imgindex to 0
