const Application = require('../models/applicationModel');

exports.getApplications = (req, res) => {
    Application.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createApplication = (req, res) => {
    Application.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ message: 'Created', id: result.insertId });
    });
};

exports.updateApplication = (req, res) => {
    const { id } = req.params;
    Application.update(id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Updated' });
    });
};

exports.deleteApplication = (req, res) => {
    const { id } = req.params;
    Application.delete(id, (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Deleted' });
    });
};
