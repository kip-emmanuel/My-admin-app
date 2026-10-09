const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/admin/BMCN', (req, res) => {
    res.send('Welcome, Kiplangat Emmanuel! This link is working perfectly.');
});

app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
