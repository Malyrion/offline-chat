import app from './app';

const PORT = process.env.PORT || 3000;
import {AppDataSource} from './utils/databaseConnector'

AppDataSource.initialize()
.then(() => {
    console.log("Database connection established successfully.");
})
.catch((error) => {
    console.error("Error during Data Source initialization:", error);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});