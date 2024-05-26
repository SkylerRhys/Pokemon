const express = require('express');
const PORT = process.env.PORT || 3001;
const sequelize = require('./db/connection');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
});