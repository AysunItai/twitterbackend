import {Router} from 'express';
const router = Router();
//USER CRUD ENDPOINTS
//create a user
router.post('/', (req, res) => {
    console.log(req.body);
    res.status(501).json({message: 'not implemented'});
    });
//list users
router.get('/', (req, res) => {
    res.status(501).json({message: 'not implemented'});
    });
//get single user
router.get('/:id', (req, res) => {
    const {id}=req.params;
    res.status(501).json({message: `not implemented : ${id}`});
    });
//update a user
router.put('/:id', (req, res) => {
    const {id}=req.params;
    console.log(req.body);
    res.status(501).json({message: `not implemented : ${id}`});
    });
//delete user
router.delete('/:id', (req, res) => {
    const {id}=req.params;
    res.status(501).json({message: `not implemented : ${id}`});
    });
export default router;