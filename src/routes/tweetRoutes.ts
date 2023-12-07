import {Router} from 'express';
const router = Router();
//tweet CRUD ENDPOINTS
//create a tweet
router.post('/', (req, res) => {
    console.log(req.body);
    res.status(501).json({message: 'not implemented'});
    });
//list tweets
router.get('/', (req, res) => {
    res.status(501).json({message: 'not implemented'});
    });
//get single tweet
router.get('/:id', (req, res) => {
    const {id}=req.params;
    res.status(501).json({message: `not implemented : ${id}`});
    });
//update a tweet
router.put('/:id', (req, res) => {
    const {id}=req.params;
    console.log(req.body);
    res.status(501).json({message: `not implemented : ${id}`});
    });
//delete tweet
router.delete('/:id', (req, res) => {
    const {id}=req.params;
    res.status(501).json({message: `not implemented : ${id}`});
    });
export default router;