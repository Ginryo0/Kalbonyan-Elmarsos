import { validationResult } from 'express-validator';

import User from '../models/User.js';
import Note from '../models/Note.js';
import mongoose from 'mongoose';

const getNotes = async (req, res) => {
  const notes = await Note.find({
    author: new mongoose.Types.ObjectId(req.userId),
  });

  return res.status(201).json({ notes });
};

const addNote = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array()[0].msg });
  }

  const { note } = req.body;

  const newNote = await Note.create({
    note,
    author: new mongoose.Types.ObjectId(req.userId),
  });

  return res
    .status(201)
    .json({ message: 'Successfully created new note.', note: newNote });
};

const updateNoteStatus = async (req, res) => {
  const { id: noteId } = req.params;

  const note = await Note.findOne({ _id: noteId });

  if (!note) {
    return res
      .status(404)
      .json({ message: 'Could not found any notes for that id.' });
  }

  if (note.author.toString() !== req.userId) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  await Note.findByIdAndUpdate(
    { _id: noteId },
    {
      active: !note.active,
    }
  );

  return res.json({
    message: `Successfully marked note as ${
      note.active ? 'Completed' : 'Active'
    }.`,
  });
};

const deleteNote = async (req, res) => {
  const { id: noteId } = req.params;

  const note = await Note.findOne({ _id: noteId });

  if (!note) {
    return res
      .status(404)
      .json({ message: 'Could not found any notes for that id.' });
  }

  if (note.author.toString() !== req.userId) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  await Note.findByIdAndRemove({
    _id: noteId,
  });

  return res.json({ message: 'Successfully deleted note.' });
};

const clearCompletedNotes = async (req, res) => {
  await Note.deleteMany({ author: req.userId, active: false });

  return res.json({ message: 'Successfully cleared completed notes.' });
};

export { addNote, getNotes, updateNoteStatus, deleteNote, clearCompletedNotes };
