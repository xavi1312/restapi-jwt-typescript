import express from "express";
import morgan from "morgan";
import cors from "cors";

// intialitations
const app = express();

// setings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send(`La API está escuchando por el puerto ${app.get("port")}`);
});

export default app;
