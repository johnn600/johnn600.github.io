/* code by John Rey Vilbar */


//-----------------------------------------------------------------------
// Get the file input element
const fileInput = document.getElementById('file-input');

// Get the carousel element
const carousel = document.getElementById('carousel');
// Track the selected image
let selectedImage = null;




// Highlight the file input area
function highlight(event) {
  if (event.dataTransfer.items) {
    const hasImageType = Array.from(event.dataTransfer.items).some(item => item.type.startsWith('image/'));
    if (!hasImageType) {
      //file being dragged is not of image type
      event.dataTransfer.dropEffect = 'none';
      return;
    }
  }
  fileInput.classList.add('highlight');
}


// Remove the highlighting from the file input area
function unhighlight() {
  fileInput.classList.remove('highlight');
}

// Handle the file drop event
function handleDrop(event) {
  event.preventDefault(); // Prevent the browser's default behavior

  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    if (imageFiles.length === files.length) {
      handleFiles(imageFiles);
    }
  }
}


// Handle the selected files
function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const imageSrc = event.target.result;
      displayImage(imageSrc, files[i].name); // Pass the file name to the displayImage function

    };
    reader.readAsDataURL(files[i]);
  }

  //display the hidden header button
  document.querySelector('.add-label-header').style.visibility = "visible";
  
}



// Display the image in the input-image element and add it to the carousel
function displayImage(imageSrc, fileName) {
  const inputImage = document.getElementById('input-image');
  inputImage.innerHTML = ''; // Clear any existing content

  const imgElement = document.createElement('img');
  imgElement.src = imageSrc;
  imgElement.alt = fileName;

  // Apply CSS styles to resize and crop the image
  imgElement.style.width = '400px';
  imgElement.style.height = '400px';
  imgElement.style.objectFit = 'cover';
  imgElement.style.imageRendering = 'crisp-edges';

  //hide the initial text elements
  document.getElementById('initial-state').style.display = "none";
  //display the image roll
  document.getElementById('carousel-container').style.display = "block";

  // Add the image to the carousel
  const carouselImg = document.createElement('img');
  carouselImg.src = imageSrc;
  carouselImg.alt = fileName;
  carouselImg.addEventListener('click', selectImage);
  console.log(fileName);

  // Apply CSS styles to resize the thumbnail in the carousel
  carouselImg.style.maxWidth = '250px';
  carouselImg.style.maxHeight = '250px';
  carouselImg.style.objectFit = 'cover';
  carouselImg.style.paddingBottom = "5px";
  carouselImg.style.margin = "5px";
  carouselImg.style.imageRendering = 'smooth';

  carousel.appendChild(carouselImg);
  inputImage.appendChild(imgElement);

  // Set the newly added image with selected class
  selectImage({ target: carouselImg });

}

// Select an image from the carousel
function selectImage(event) {
  const clickedImage = event.target;
  const fileName = clickedImage.alt; // Retrieve the file name from the alt attribute

  // Remove selected class from previously selected image
  if (selectedImage) {
    selectedImage.classList.remove('selected');
  }

  // Add selected class to the clicked image
  clickedImage.classList.add('selected');

  selectedImage = clickedImage;

  // Display the selected image in the input-image element
  const inputImage = document.getElementById('input-image');
  inputImage.innerHTML = ''; // Clear any existing content

  const imgElement = document.createElement('img');
  imgElement.src = selectedImage.src;
  imgElement.alt = fileName;

  // Set the file name in the image detail section
  document.getElementById('image-name').innerText = "Selected: " + fileName;

  // Apply CSS styles to resize and crop the image
  imgElement.style.width = '250px';
  imgElement.style.height = '250px';
  imgElement.style.objectFit = 'cover';
  imgElement.style.imageRendering = 'crisp-edges';
  imgElement.draggable = false;

  inputImage.appendChild(imgElement);

  //reset the bars
  var labelFills = document.querySelectorAll(".label-fill");
  labelFills.forEach(function(labelFill) {
    labelFill.style.width = "0%";
  });

  //reset the disabled button
  var checkButton = document.getElementById('check-image');
  checkButton.innerHTML = 'Check image';
  checkButton.disabled = false;
  checkButton.style.cursor = 'pointer';
  checkButton.style.borderBottom = "5px #4caf50 solid";
  checkButton.style.backgroundColor = "transparent";

  // Set background color on hover
  checkButton.addEventListener('mouseover', function() {
    checkButton.style.backgroundColor = "#dddddd";
  });

  // Reset background color when not hovered
  checkButton.addEventListener('mouseout', function() {
    checkButton.style.backgroundColor = "transparent";
  });

}

//page design scripts
window.addEventListener("scroll", function () {
  let marker = document.getElementById("navbar-fading");
  let logo = document.querySelector("logo");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //marker.style.opacity = 1 - scrollTop / 100;
  marker.style.background = "";

  if (scrollTop > 100) {
    let alpha = (scrollTop - 100) / 100; // Calculate the alpha value based on the scrollTop value
    alpha = Math.min(alpha, 1.0); // Limit the alpha value to a maximum of 1.0
    marker.style.background = `linear-gradient(0deg, rgba(116,129,129,0) 0%, rgba(204, 204, 204, ${alpha}) 0%)`;
  }

  //change the text in logo to "" when scrollTop is > 200
  let title = document.getElementById("header-title");
  let screenWidth = window.innerWidth;

  
  if (scrollTop > 200) {
    title.innerHTML = "pixel watch";
    title.style.fontFamily = "Montserrat_Bold";
    title.style.fontSize = "24px";

    //change the font size for mobile
    if (screenWidth < 500) {
      title.style.fontSize = "20px";
    }

  } else {
    title.innerText = "";
    title.style.fontFamily = "Montserrat_Medium";
    
    if (screenWidth < 500) {
      title.style.fontSize = "15px";
    }
  }
  
});

const itemCount = 3;
const ul = document.querySelector('ul');

function animateScroll() {
  let current = 1;
  setInterval(() => {
    ul.style.transform = `translateY(-${(100 / itemCount) * current}%)`;
    current = (current % itemCount) + 1;
  }, 4000);
}

animateScroll();

