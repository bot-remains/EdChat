import express from 'express';
const router = express.Router();

import { colleges } from '../utils/data.js';

router.get('/:collegeName/branch/:branchName', (req, res) => {
  const { collegeName, branchName } = req.params;
  const college = colleges[collegeName];

  if (!college) {
    return res.status(404).json({ error: 'College not found' });
  }

  const branch = college[branchName];
  if (!branch) {
    return res
      .status(404)
      .json({ error: 'Branch not found in the specified college' });
  }

  const placementData = Object.keys(college).reduce((acc, branchName) => {
    const branch = college[branchName];
    const placementRate = branch.Placement
      ? branch.Placement[0]
      : 'Data not available';
    acc[branchName] = placementRate;
    return acc;
  }, {});

  const placement = branch.Placement || 'Data not available';
  const availableSeats = Object.keys(branch).reduce((seats, category) => {
    if (branch[category].availableSeats) {
      seats[category] = branch[category].availableSeats[0];
    }
    return seats;
  }, {});

  const response = {
    branchData: branch,
    placement: placementData,
    availableSeats,
  };

  res.json(response);
});

router.get('/seats/:collegeName/branch/:branchName', (req, res) => {
  const { collegeName, branchName } = req.params;
  const college = colleges[collegeName];

  if (!college) {
    return res.status(404).json({ error: 'College not found' });
  }

  const branch = college[branchName];
  if (!branch) {
    return res
      .status(404)
      .json({ error: 'Branch not found in the specified college' });
  }

  const availableSeats = Object.keys(branch).reduce((seats, category) => {
    if (branch[category].availableSeats) {
      seats[category] = branch[category].availableSeats[0];
    }
    return seats;
  }, {});

  res.json(availableSeats);
});

export default router;
