import express, {Response} from 'express';

const app = express();
const port = 5000;

app.get('/', (res: Response) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
