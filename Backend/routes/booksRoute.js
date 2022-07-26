const express = require('express')
const router = express.Router()

const Books = require('../models/Books')
const upload = require('../middleware/upload')
const isAuth = require('../middleware/auth')

router.get('/api/books', isAuth, async(req, res)=>{ 
    try {
        const GetAllBooks = await Books.find();
        if(!GetAllBooks){

            return res.status(404).json("No Books Found")
        }

        res.status(200).json(GetAllBooks)
    } catch (error) { 
        console.log(error);
    }
})

router.get('/api/books/:id', async(req, res)=>{
    try {
        const FindBook = await Books.findById(req.params.id)

        if(!FindBook){
            return res.status(404).json("Book cannot be found")
        }
        res.status(200).json(FindBook)
        
    } catch (error) {
        console.log(error);
    }
})


router.post('/api/books', upload.single('image'), async(req, res)=>{
    
    try {
        const PostAllBooks = new Books({
            name: req.body.name,
            author: req.body.author,
            description: req.body.description,
            imageUrl: req.file.path,
            price: req.body.price,
            available: req.body.available
        })
        
        await PostAllBooks.save()

        if(!PostAllBooks){
            return res.status(500).json("Could not send")
        }

        if(!req.file){
            return res.status(500).json({message: "could not send"})
        }

        res.status(201).json(PostAllBooks)

    } catch (error) {
        console.log(error);
    }
})

router.put('/api/books/:id', upload.single('image'), async (req, res)=>{
    
    try {
        const updateBook = await Books.findById(req.params.id)

            updateBook.name = req.body.name
            updateBook.author = req.body.author
            updateBook.description = req.body.description,
            updateBook.imageUrl = req.file.path,
            updateBook.price = req.body.price,
            updateBook.available = req.body.available

            if(!updateBook){
                return res.status(400).json("Could not update Book")
            }
  
            await updateBook.save()

            res.status(200).json({updateBook})

    } catch (error) {
        
        res.status(500).json({message: 'could not send'})
    }
})


router.delete('/api/books/:id', async(req, res)=>{
    try {
        const deleteBooks = await Books.findByIdAndDelete(req.params.id)

        if(!deleteBooks){
            return res.status(400).json("could not delete bokk")
        }
        res.status(200).json("Book successfylly deletes")

    } catch (error) {
        console.log(error);
    }
})


module.exports = router;