import express from 'express';
import { submitContactForm, getAllContactForms } from '../controllers/contactFormController.js';

const router = express.Router();

router.post('/submit', submitContactForm);
router.post('/all', getAllContactForms);

export default router;
