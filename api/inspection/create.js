const { inspections } = require('../_data');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { engineerId, warehouseId, location, sensorData, result } = req.body || {};

  if (!engineerId || !warehouseId || !location || !sensorData || !result) {
    res.status(400).json({ error: 'Missing required data' });
    return;
  }

  const inspection = {
    id: 'INSP-' + Date.now(),
    engineerId,
    warehouseId,
    location,
    sensorData,
    result,
    timestamp: new Date().toISOString(),
    locked: true
  };

  inspections.push(inspection);

  res.status(200).json({ message: 'Inspection submitted', inspection });
};
