// Placeholder function for login
function login(username, password) {
  // Your login logic here, possibly AJAX call to backend
}

// Placeholder function for uploading picture
function uploadPicture(file, view) {
  // Your picture upload logic here, possibly AJAX call to backend
}

document.getElementById('largePowerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(this);

  // Example of accessing form data
  const region = formData.get('region');
  const county = formData.get('county');
  const customerName = formData.get('customerName');
  const meterNumber = formData.get('meterNumber');
  const meteringType = formData.getAll('meteringType');
  const sealsAvailable = formData.get('sealsAvailable');
  const readingAvailable = formData.get('readingAvailable');
  const pictorialFile = formData.get('pictorial');

  // Example of accessing checkboxes
  const poleMounted = meteringType.includes('Pole Mounted');
  const groundMounted = meteringType.includes('Ground Mounted');

  // Example of accessing picture view
const pictorialInput = document.getElementById('pictorial');
const filePreview = document.getElementById('filePreview');

pictorialInput.addEventListener('change', function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function() {
      const img = document.createElement('img');
      img.src = reader.result;
      filePreview.innerHTML = '';
      filePreview.appendChild(img);
    }

    reader.readAsDataURL(file);
  } else {
    filePreview.innerHTML = '';
  }
});


  // Example of login
  login(username, password);

  // Example of uploading picture
  uploadPicture(pictorialFile, pictorialView);

  // Now you can do something with the form data, like send it to a server
  console.log('Form submitted:', {
    region,
    county,
    customerName,
    meterNumber,
    poleMounted,
    groundMounted,
    sealsAvailable,
    readingAvailable,
    pictorialFile,
    pictorialView
  });
});
// Get the radio buttons
var sealsYes = document.getElementById("sealsYes");
var sealsNo = document.getElementById("sealsNo");

// Get the seal serial number field
var sealSerialNumberField = document.getElementById("sealSerialNumberField");

// Add event listeners to radio buttons
sealsYes.addEventListener("change", function() {
  if (sealsYes.checked) {
    sealSerialNumberField.style.display = "block"; // Show the text field
  } else {
    sealSerialNumberField.style.display = "none"; // Hide the text field
  }
});

sealsNo.addEventListener("change", function() {
  if (sealsNo.checked) {
    sealSerialNumberField.style.display = "none"; // Hide the text field
  }
});
