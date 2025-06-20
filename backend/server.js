const express = require('express');
const cors = require('cors');
const app = express();
const appRoutes = require('./routes/applicationRoutes');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api/applications', appRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
