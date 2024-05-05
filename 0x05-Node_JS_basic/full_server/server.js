import express from 'express';
import makeRoutes from './routes';

const app = express();
const PORT = 1245;

makeRoutes(app);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
module.exports = app;
