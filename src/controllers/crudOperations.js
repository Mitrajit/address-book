const mongoose = require('mongoose');
const contacts = require('../models/contact');

function oneNewContact(req, res) {
  try {
    // add contacts to database
    contacts.create(req.body, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  } catch (err) {
    res.status(500).send(err);
  }
}

function addBulk(req, res) {
  try {
    contacts.insertMany(req.body, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  } catch (err) {
    res.status(500).send(err);
  }
}

function getSingleContact(req, res) {
  try {
    // Find one req.query.name in database
    contacts.findOne({ name: req.query.name }, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  } catch (err) {
    res.status(500).send(err);
  }
}

function getContacts(req, res) {
  try {
  // Find req.query.phrase matching phrase as name or email or address in the database
    contacts.find({
      $or: [
        { name: { $regex: req.query.phrase, $options: 'i' } },
        { email: { $regex: req.query.phrase, $options: 'i' } },
        { address: { $regex: req.query.phrase, $options: 'i' } },
      ],
    }, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getAll(req, res) {
  try {
  // Pagination in mongodb
    const recordsPerPage = 2;
    const totalPages = Math.ceil(await contacts.count().exec() / recordsPerPage);
    if (req.query.page <= 0 || req.query.page > totalPages) {
      return res.status(400).send(`Page number must be in the range of 0-${totalPages}`);
    }
    contacts.find()
      .limit(recordsPerPage)
      .skip(recordsPerPage * (req.query.page - 1))
      .exec((err, contact) => {
        if (err) {
          res.send(err);
        }
        res.json({ contacts: contact, page: req.query.page });
      });
  } catch (err) {
    res.status(500).send(err);
  }
  return null;
}

function update(req, res) {
  try {
  // Update contact by id in database
    contacts.updateOne(
      { _id: new mongoose.Types.ObjectId(req.query.id) },
      req.body,
      { upsert: true },
      (err, result) => {
        if (err) {
          res.send(err);
        }
        res.json(result);
      },
    );
  } catch (err) {
    res.status(500).send(err);
  }
}

function deleteContact(req, res) {
  try {
  // Delete contact by id in database
    contacts.findByIdAndRemove(req.query.id, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted contact!' });
    });
  } catch (err) {
    res.status(500).send(err);
  }
}
module.exports = {
  oneNewContact,
  addBulk,
  getSingleContact,
  getContacts,
  getAll,
  update,
  deleteContact,
};
