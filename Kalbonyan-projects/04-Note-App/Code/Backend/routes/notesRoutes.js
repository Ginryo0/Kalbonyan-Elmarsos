import express from 'express';
import { body } from 'express-validator';

import Note from '../models/Note.js';
import authMiddleware from '../middleware/auth.js';
import {
  addNote,
  getNotes,
  updateNoteStatus,
  deleteNote,
  clearCompletedNotes,
} from '../controllers/NotesController.js';

const router = express.Router();

router.route('/').get(authMiddleware, getNotes);

router.route('/clear-completed').delete(authMiddleware, clearCompletedNotes);

router
  .route('/add')
  .post(
    authMiddleware,
    [
      body('note')
        .isString()
        .withMessage('Please enter note text.')
        .notEmpty()
        .withMessage('Please enter note text.'),
    ],
    addNote
  );

router
  .route('/:id')
  .delete(authMiddleware, deleteNote)
  .patch(authMiddleware, updateNoteStatus);

export default router;
