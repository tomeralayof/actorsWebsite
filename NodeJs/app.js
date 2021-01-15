const userRouter = require('./routes/userrRout');
const loginRouter = require('./routes/auth');
const profileRouter = require("./routes/profiles");
const addToFavorite = require("./routes/favorites");
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());

mongoose.connect('mongodb://localhost/actores_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));



  app.use(cors());



app.use('/api/users', userRouter);

app.use('/api/login',loginRouter);

app.use("/api/profile", profileRouter);

app.use("/api/favorites", addToFavorite);

const PORT = 8181;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));