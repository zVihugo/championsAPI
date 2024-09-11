import createApp from "./app";

require('dotenv').config();

const app = createApp();
const port = process.env.PORT;

app.listen(2525, () => {
    console.log(`Server is running ${port}`);
});