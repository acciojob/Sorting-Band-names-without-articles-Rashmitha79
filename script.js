//your code here
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sorted Band Names</title>
</head>
<body>

  <ul id="band"></ul>

  <script>
    // Function to sort band names
    function sortBandNames(bandNames) {
      // Remove articles and convert to lowercase for sorting
      const sortedBandNames = bandNames
        .map(name => name.replace(/^(a|an|the)\s+/i, '').toLowerCase())
        .sort();

      // Get the ul element
      const bandList = document.getElementById('band');

      // Create li elements and append them to the ul
      sortedBandNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        bandList.appendChild(li);
      });
    }

    // Example usage
    const bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'Anthrax'];
    sortBandNames(bandNames);
  </script>

</body>
</html>


