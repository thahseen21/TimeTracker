const sql = require('mssql');

async function runQuery(data) {
  return sql.connect('Server=localhost,1433;Database=TimeTracker;User Id=sa;Password=MyPassword123;Trusted_Connection=True;TrustServerCertificate=True;').then((pool) => {
    return pool.query(data)
  })
}

module.exports = runQuery;
