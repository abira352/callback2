// Function to simulate ordering food
function orderFood(callback) {
    console.log("Order placed: Food is being ordered");
    callback(); // Proceed to cooking
  }
  
  // Function to simulate cooking food
  function cookFood(callback) {
    console.log("Cooking the food");
    callback(); // Proceed to serving
  }
  
  // Function to simulate serving food
  function serveFood(callback) {
    console.log("Serving the food");
    callback(); // Proceed to eating
  }
  
  // Function to simulate eating food
  function eatFood() {
    console.log("Eating the food");
  
  }
  
  // Callback hell example: Nesting the functions one inside another
  orderFood(() => {
    cookFood(() => {
      serveFood(() => {
        eatFood(); // Final step of eating food
      });
    });
  });
  
  function add(){
    alert("work is done😎😎😊😉😊😎😎")
  }