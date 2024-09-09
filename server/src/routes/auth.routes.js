import express from 'express';
import { signIn, signOut, signUp } from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/sign-up').post(signUp);

router.route('/sign-in').post(signIn);

router.route('/sign-out').get(signOut);

export default router;
