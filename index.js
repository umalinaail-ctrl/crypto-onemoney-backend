const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/get-address', (req, res) => {
    const phoneNumber = req.query.phone;
    if (!phoneNumber) {
        return res.status(400).send("Phone number missing");
    }
    const depositAddress = "0x0000000000000000000000000000000000000000"; 
    res.send(depositAddress);
});

app.post('/api/webhook', async (req, res) => {
    res.status(200).send("Webhook Received");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
