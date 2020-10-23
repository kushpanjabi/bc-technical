const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
const routes = require('./routes');


app.use((cors()));
app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});