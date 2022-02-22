import express, { Request, Response} from 'express'
import bodyParser from 'body-parser'
import { studentRouter } from './routes/v1';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(studentRouter)


app.listen(3000, () => {
    console.log('Listening on port 3000')
})