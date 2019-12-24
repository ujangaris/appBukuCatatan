const app = require('./app');

const PORT = process.env.POST || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http:://localhost:${PORT}`);
});