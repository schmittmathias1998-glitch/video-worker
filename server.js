import express from "express";

const app = express();
app.use(express.json());

app.get("/healthz", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/start", (req, res) => {
  res.status(200).json({ status: "worker alive", body: req.body });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Worker listening on", port);
});
