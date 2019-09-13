const express = require('express');
const app = express();

app.use('/', (req, res) => {
	res.status(200).send('Express is working!');
})

app.listen(process.env.PORT);