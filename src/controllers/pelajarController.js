const pool = require("../config/db");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const [rows] = await pool.execute(
        "SELECT * FROM pelajar ORDER BY id DESC"
      );
      res.json(rows);
    } catch (err) {
      next(err);
    }
  },
  getById: async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const [rows] = await pool.execute("SELECT * FROM pelajar where id = ?", [
        id,
      ]);
      if (rows.length === 0)
        return res.status(400).json({ message: "data tidak ditemukan" });
      res.json(rows[0]);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const { nama, alamat } = req.body;
      const [result] = await pool.execute(
        "INSERT INTO pelajar (nama, alamat) VALUES (?,?)",
        [nama, alamat]
      );

      res.status(201).json({ nama, alamat });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const { nama, alamat } = req.body;
      const [result] = await pool.execute(
        "UPDATE pelajar SET nama = ? , alamat = ? WHERE id = ?",
        [nama, alamat, id]
      );

      res.status(201).json({ nama, alamat });
    } catch (err) {
      next(err);
    }
  },
  remove: async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);

      const [result] = await pool.execute("DELETE FROM pelajar WHERE id = ?", [
        id,
      ]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }

      res.json({ message: "Data berhasil dihapus" });
    } catch (err) {
      next(err);
    }
  },
};
