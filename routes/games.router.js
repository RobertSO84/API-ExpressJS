const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { games } = req.params;
  res.json([
    {
      games,
      name: 'Halo',
      platform: 'ps4'
    },
    {
      games,
      name: 'FF7',
      platform: 'Xbox'
    }
  ])
});

router.get('/:gamesId/date/:datId', (req, res) => {
  const { gamesId, datId } = req.params;
  res.json([
    {
      gamesId,
      datId
    }
  ])
});

module.exports = router;
