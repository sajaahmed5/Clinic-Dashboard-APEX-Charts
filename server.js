const express = require('express');
const axios = require('axios');
const csv = require('csvtojson'); // Import csvtojson to convert CSV to JSON format
const cors = require('cors');

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// GitHub raw links to your CSV files
const csvUrl1 = 'https://raw.githubusercontent.com/sajaahmed5/Clinic-Dashboard-APEX-Charts/refs/heads/main/chart_4_1.csv';
const csvUrl2 = 'https://raw.githubusercontent.com/sajaahmed5/Clinic-Dashboard-APEX-Charts/refs/heads/main/chart_4_2.csv';
const csvUrl3 = 'https://raw.githubusercontent.com/sajaahmed5/Clinic-Dashboard-APEX-Charts/refs/heads/main/chart_4_3.csv';

// Define API endpoint to get chart data
app.get('/chart-data', async (req, res) => {
    try {
        // Fetch CSV data from GitHub
        const [response1, response2, response3] = await Promise.all([
            axios.get(csvUrl1),
            axios.get(csvUrl2),
            axios.get(csvUrl3)
        ]);

        // Parse CSV data to JSON
        const chart1Data = await csv().fromString(response1.data);
        const chart2Data = await csv().fromString(response2.data);
        const chart3Data = await csv().fromString(response3.data);

        // Return all chart data in one response
        res.json({
            chart1: chart1Data,
            chart2: chart2Data,
            chart3: chart3Data
        });
    } catch (err) {
        console.error('Error fetching or processing data:', err);
        res.status(500).send('Error fetching chart data');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
