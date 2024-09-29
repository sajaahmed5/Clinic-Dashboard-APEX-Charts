const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Import cors

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Create connection to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sajaucas5',
    database: 'ben_schema_charts'
});

// Connect to MySQL
db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// Define API endpoint to get chart data
app.get('/chart-data', (req, res) => {
    const query1 = `SELECT year_, sum_of_amount AS sumAmount FROM chart_4_1`;
    const query2 = `SELECT * FROM chart_4_2`;
    const query3 = `SELECT * FROM chart_4_3`;

    db.query(query1, (err, results1) => {
        if (err) throw err;
        db.query(query2, (err, results2) => {
            if (err) throw err;
            db.query(query3, (err, results3) => {
                if (err) throw err;

                // Return all chart data in one response
                res.json({
                    chart1: results1,
                    chart2: results2,
                    chart3: results3
                });
            });
        });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
