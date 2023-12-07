import express from 'express';
import userRoutes from './routes/userRoutes';
import tweetRoutes from './routes/tweetRoutes';
const app = express();  
//this will autamatically parse a file as json 
app.use(express.json());
app.use('/user',userRoutes);
app.use('/tweet',tweetRoutes);



app.get('/', (req, res) => {
    res.send('Hello World! updated');
    });


app.listen(3000, () => {
    console.log('Server running on port 3000');
    });

