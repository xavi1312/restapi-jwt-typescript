import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import privateRoutes from "./routes/provate.routes";
import passport from "passport";
import passportMidelware from "./middlewares/passport";

// intialitations
const app = express();

// setings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMidelware);

// routes
app.get("/", (req, res) => {
  res.send(`La API está escuchando por el puerto ${app.get("port")}`);
});

app.use(authRoutes);
app.use(privateRoutes);

export default app;
