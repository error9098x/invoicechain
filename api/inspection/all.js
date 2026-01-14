const { inspections } = require('../_data');

module.exports = (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  res.status(200).json(inspections);
};
