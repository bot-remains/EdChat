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

  const placement = branch.Placement || 'Data not available';
  const availableSeats = Object.keys(branch).reduce((seats, category) => {
    if (branch[category].availableSeats) {
      seats[category] = branch[category].availableSeats[0]; // Assuming it's an array and taking the first value
    }
    return seats;
  }, {});

  const response = {
    branchData: branch,
    placement,
    availableSeats,
  };

  res.json(response);
});

export default router;
