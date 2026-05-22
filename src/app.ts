import express, { type Application } from "express"
import router from "./module/auth/auth.route";
const app : Application = express()

app.use(express.json());
app.use("/api", router)
app.get("/api", async (req, res) => {
  res.send("Backend Running");
});


export default app