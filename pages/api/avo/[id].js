import Database from '../../../database/db';

const allAvos = async (req, res) => {
    const db = new Database();
    const id = req.query.id;
    const avo = await db.getById(id);

    res.status(200).json({ avo });
};

export default allAvos;
