import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();
const port = process.env.PORT || 5173;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(cors());

app.use(express.json());

app.use(routes);

app.get("/", (req, res) => {
    res.json("Hello");
  });

app.listen(port, () => {
    console.log('Server started on port 5173!');
})