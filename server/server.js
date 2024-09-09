import { app, appConfig } from './config.js';
import authRoutes from './src/routes/auth.routes.js';
import collegeRoutes from './src/routes/data.routes.js';

appConfig();
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/college', collegeRoutes);
