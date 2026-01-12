const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const inspections = [];

app.post("/inspection/create", (req, res) => {
  const { engineerId, warehouseId, location, sensorData, result } = req.body;

  if (!engineerId || !warehouseId || !location || !sensorData || !result) {
    return res.status(400).json({ error: "Missing required data" });
  }

  const inspection = {
    id: "INSP-" + Date.now(),
    engineerId,
    warehouseId,
    location,
    sensorData,
    result,
    timestamp: new Date().toISOString(),
    locked: true
  };

  inspections.push(inspection);

  res.json({ message: "Inspection submitted", inspection });
});

app.get("/inspection/all", (req, res) => {
  res.json(inspections);
});

app.listen(8000, () => {
  console.log("Backend running on http://localhost:8000");
});
