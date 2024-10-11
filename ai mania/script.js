function showImage() {
    // Get the image element
    const imageElement = document.getElementById("winnerImage");
    
    // Set the image source dynamically (path to the image file)
    imageElement.src = "images\image.png"; // Update the path based on your setup
    
    // Display the image
    imageElement.style.display = "block";
}
