const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Import cors
const csv = require('csv-parser'); // Import csv-parser

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Function to read and parse CSV files
const readCSVFile = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv()) // Parse CSV file
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results)) // Resolve the parsed data
            .on('error', (err) => reject(err)); // Handle errors
    });
};

// Define API endpoint to get chart data
app.get('/chart-data', async (req, res) => {
    try {
        // Read all the dataset files (assume they are in the same directory as this script)
        const chart1 = await readCSVFile('./chart_4_1.csv');
        const chart2 = await readCSVFile('./chart_4_2.csv');
        const chart3 = await readCSVFile('./chart_4_3.csv');

        // Return all chart data in one response
        res.json({
            chart1,
            chart2,
            chart3
        });
    } catch (err) {
        console.error("Error reading data files: ", err);
        res.status(500).json({ error: "Failed to read chart data" });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
