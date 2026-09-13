const express = require('express');
const { ethers } = require('ethers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint to generate a real deposit address for a phone number
app.get('/api/get-address', (req, res) => {
  const phone = req.query.phone;
  if (!phone) {
    return res.status(400).send('Phone number is required');
  }

  // Generate a new real crypto wallet (Address + Private Key)
  const wallet = ethers.Wallet.createRandom();

  // Return the public deposit address to Kodular
  res.send(wallet.address);
});

// Webhook endpoint to receive transaction alerts
app.post('/api/webhook', (req, res) => {
  console.log('Incoming transaction webhook:', req.body);
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
