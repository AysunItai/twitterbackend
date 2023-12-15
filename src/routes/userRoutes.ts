import {Router} from 'express';
import { PrismaClient } from '@prisma/client';




const router = Router();
const prisma = new PrismaClient();



//USER CRUD ENDPOINTS
//create a user
router.post('/', async (req, res) => {
    try{
    const  {email,name,username}=req.body;
    console.log(email,name,username);
    const result=await prisma.user.create({
        data:{
            email,
            name,
            username,
        }
    })
    res.json(result);
}catch(error:any){
    res.status(400).json({error:'user name and email should be unique'})
}
   });



//list users
router.get('/', async (req, res) => {
    const allUser= await prisma.user.findMany();
    res.json(allUser);
    });
//get single user
router.get('/:id', async (req, res) => {
    const {id}=req.params;
    const user=await prisma.user.findUnique({where:{id:Number(id)}})
    res.json(user);
    });
//update a user
router.put('/:id', async (req, res) => {
    const {id}=req.params;
    const {bio,name,image}=req.body;
    try{
    const result=await prisma.user.update({
        where:{id:Number(id)},
        data:{
            bio,
            name,
            image
        }
    })
    res.json(result);
    }catch(error){
        res.status(400).json({error:'user name and email should be unique'})
    }
    });
//delete user
router.delete('/:id', async (req, res) => {
    const {id}=req.params;
    await prisma.user.delete({where:{id:Number(id)}})
    
    res.json({message:`user with id ${id} deleted`});
    });
export default router;