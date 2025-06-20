const db = require('../config/db');

exports.getAll = (callback) => {
    db.query('SELECT * FROM applications', callback);
};

exports.create = (data, callback) => {
    db.query('INSERT INTO applications SET ?', data, callback);
};

exports.update = (id, data, callback) => {
    db.query('UPDATE applications SET ? WHERE id = ?', [data, id], callback);
};

exports.delete = (id, callback) => {
    db.query('DELETE FROM applications WHERE id = ?', [id], callback);
};
