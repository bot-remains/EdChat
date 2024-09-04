import { app, appConfig } from './config.js';
import authRoutes from './src/routes/auth.routes.js';

appConfig();
app.use('/api/v1/auth', authRoutes);
