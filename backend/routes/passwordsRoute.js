import express from "express";
import { Password } from "../models/passwordModel.js";

const router = express.Router();

// Route to Create a new book
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.website || !request.body.email || !request.body.password
        ) {
            return response.status(400).send({
                message: 'send all required fields: title, author, publishYear'
            })
        }

        const newPassword = {
            website: request.body.website,
            email: request.body.email,
            password: request.body.password
        }

        const password = await Password.create(newPassword)
        return response.status(201).send(password)

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message })
    }
});

//route to Get All Books From Database
router.get('/', async (request, response) => {
    try {
        const passwords = await Password.find({})
        return response.status(200).json({
            count: passwords.length,
            data: passwords
        });
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message })
    }
});

//route to Get One Book fromdatabase by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const password = await Password.findById(id)
        return response.status(200).json(password);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message })
    }
});

//route to Update a book
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.website || !request.body.email || !request.body.password
        ) {
            return response.status(400).send({
                message: 'Send all required fields: website URL, email account registered and password'
            })
        }
        const { id } = request.params;

        const result = await Password.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(400).json({ message: 'Password not found' })
        }
        return response.status(200).send({ message: 'Password updated successfully' })

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message })
    }
});

//Route to Delete a Book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Password.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Password not found' })
        }

        return response.status(200).send({ message: 'Password deleted successfully' });

    } catch (error) {
        console.log(error)
        response.status(500).send({ message: error.message })
    }
});

export default router;