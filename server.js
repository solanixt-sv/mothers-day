const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Default route → main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'mothers_day_talking_doll.html'));
});

app.listen(PORT, () => {
    console.log(`🌸 Mother's Day server running on port ${PORT}`);
});
