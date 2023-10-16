// Suppose an array that contains a list of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'Anthrax'];

// Function to sort band names and display them in the 'band' ul
function sortAndDisplayBandNames(bandNames) {
  // Remove articles and convert to lowercase for sorting
  const sortedBandNames = bandNames
    .map(name => name.replace(/^(a|an|the)\s+/i, '').toLowerCase())
    .sort();

  // Get the 'band' ul element
  const bandList = document.getElementById('band');

  // Clear existing content
  bandList.innerHTML = '';

  // Create li elements and append them to the 'band' ul
  sortedBandNames.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    bandList.appendChild(li);
  });
}

// Example usage
sortAndDisplayBandNames(bandNames);
