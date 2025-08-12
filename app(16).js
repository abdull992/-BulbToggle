
 const toggleBulb = () => {
    let bulb = document.getElementById('bulb');

    bulb.src = (bulb.src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpAa6rBT28rMK0IuqPsEg99R7AQ64tzWNcQ&s") // ON state image
      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYN5hxKWQV1MIaOouOGzm7uPyv-nNgNkDEQ&s"  // OFF state image
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpAa6rBT28rMK0IuqPsEg99R7AQ64tzWNcQ&s";   // ON state image
  }