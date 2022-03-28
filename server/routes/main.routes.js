const cashierController = require("../controllers/main.controllers");

async function init(router) {
  console.log("in routes"); 

  router.get('/getTasks',cashierController.getTask)
  router.get('/gettimelog',cashierController.getTimeLog)
  
  router.post('/addtask',cashierController.addTask)
  router.post('/removeTask',cashierController.removeTask)
  router.post('/startTimer',cashierController.startTimer)
  
  router.put('/stopTimer',cashierController.stopTimer)
  
  // router.get("/category", cashierController.getCategory);
  // router.get("/dish", cashierController.getDish);

  // router.post("/setorder", cashierController.setOrder);
  // router.post("/placeorder", cashierController.placeOrder);
  // router.post("/closeorder", cashierController.closeOrder);

  // router.put("/incrementorder", cashierController.incrementOrder);
  // router.put("/decrementorder", cashierController.decrementOrder);
}

module.exports.init = init;
