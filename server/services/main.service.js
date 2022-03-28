// const mysql = require("../utils/mysql");

const runQuery = require('../config/db')

exports.getTask = async (req, res) => {
    let sql = "Select * from Task WHERE IsDeleted = 0"
    let data = await runQuery(sql);
    return data.recordsets
}

exports.name = async (req,res) =>{
    
}

exports.addTask = async (req,res) =>{
    let sql = `INSERT INTO [Task](Name) VALUES ('${req.name}')`
    let data = await runQuery(sql);
    return data.rowsAffected[0] > 0;
}

exports.removeTask = async (req,res) =>{
    let sql = `UPDATE Task SET IsDeleted = 1 WHERE id = ${req.id}`
    let data = await runQuery(sql);
    return data.rowsAffected[0] > 0;
}


exports.getTimeLog = async (req,res) =>{
    let sql = "Select * from TimeLog WHERE IsDeleted IS NOT NULL ORDER BY StartedAt DESC"
    let data = await runQuery(sql);
    return data.recordsets
}

exports.startTimer = async (req,res) =>{
    let sql = `IF NOT EXISTS(select 1 from timelog WHERE stoppedat is NULL) INSERT INTO TimeLog(TaskId) VALUES (${req.TaskId})`
    let data = await runQuery(sql);
    return data.rowsAffected[0] > 0;
}

exports.stopTimer = async (req,res) =>{
    let sql = `IF EXISTS(select 1 from timelog WHERE stoppedat is NULL) UPDATE TimeLog SET StoppedAt = GETUTCDATE() WHERE Id = ${req.Id} and StoppedAt IS NULL`
    let data = await runQuery(sql);
    return data.rowsAffected[0] > 0;
}


// exports.getCategory = (req, res) => {
//   let sql = "SELECT * FROM category";

//   return mysql.query(sql);
// };

// exports.getDish = (req, res) => {
//   let sql = "SELECT * FROM dish";

//   return mysql.query(sql);
// };

// exports.setOrder = (req) => {
//   let table = req.body.table;
//   let sql;

//   sql = "INSERT INTO restaurant.order (`table`) VALUES (?)";

//   return mysql.query(sql, table);
// };

// exports.placeOrder = async (req, res) => {
//   let body = req.body,
//     values = [],
//     sql;

//   values = [body.orderId, body.dishId, body.count];

//   sql =
//     "INSERT INTO restaurant.order_map (`order_id`,`dish_id`,`count`) VALUES (?,?,?)";

//   return mysql.query(sql, values);
// };

// exports.incrementOrder = async (req, res) => {
//   let body = req.body,
//     values = [],
//     sql;

//   values = [body.orderId, body.dishId];

//   sql =
//     "update restaurant.order_map set count = count +1 where order_id = ? and dish_id = ?";

//   return mysql.query(sql, values);
// };
// exports.decrementOrder = async (req, res) => {
//   let body = req.body,
//     values = [],
//     sql;

//   values = [body.orderId, body.dishId];

//   sql =
//     "update restaurant.order_map set count = count -1 where order_id = ? and dish_id = ?";

//   return mysql.query(sql, values);
// };

// exports.closeOrder = (req, res) => {
//   let body = req.body;

//   let values = [body.payment, body.orderId];

//   let sql =
//     "UPDATE restaurant.order SET transaction = ?, is_paid ='1' WHERE (id = ?)";
//   return mysql.query(sql, values);
// };
