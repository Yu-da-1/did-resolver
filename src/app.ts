import express from 'express';
import { resolveDID } from './didResolver';

const app = express();
const port = 3000;

app.get('/resolve/:did', async (req, res) => {
    const did = req.params.did;
    const result = await resolveDID(did);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});