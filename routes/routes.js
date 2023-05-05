const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', async (req, res) => {
  try {
    const activities = await db.select('*').from('activities');
    res.status(200).json(activities);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Erro ao buscar atividades.',
      error: error
    });
  }
});

router.post('/', async (req, res) => {
  const activity = req.body;
  try {
    const insertedIds = await db('activities').insert(activity);
    activity.id = insertedIds[0];
    res.status(201).json(activity);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Erro ao criar atividade.',
      error: error
    });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const activity = await db.select('*').from('activities').where('id', id).first();
    if (activity) {
      res.status(200).json(activity);
    } else {
      res.status(404).json({
        message: 'Atividade não encontrada.'
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Erro ao buscar atividade.',
      error: error
    });
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const newActivity = req.body;
  try {
    const updated = await db('activities').where('id', id).update(newActivity);
    if (updated) {
      res.status(200).json({
        message: 'Atividade atualizada com sucesso!'
      });
    } else {
      res.status(404).json({
        message: 'Atividade não encontrada.'
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Erro ao atualizar atividade.',
      error: error
    });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await db('activities').where('id', id).delete();
    if (deleted) {
      res.status(200).json({
        message: 'Atividade excluída com sucesso!'
      });
    } else {
      res.status(404).json({
        message: 'Atividade não encontrada.'
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Erro ao excluir atividade.',
      error: error
    });
  }
});

module.exports = router;