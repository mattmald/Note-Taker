const express = require('express')
const htmlRoute = require('./routes/htmlroutes.js')
const apiRoutes = require('./routes/apiroute.js')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded(
    { 
        extended: true 
    }
));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
