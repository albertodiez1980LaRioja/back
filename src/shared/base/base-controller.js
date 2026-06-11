


class BaseController {
    constructor(service, options = {}) {
        this.service = service;
        this.options = options;

    }

    async get(req, res) {
        try {
            const rows = await this.service.get(req, res);
            res.status(200).json({ data: rows });
            return rows;
        } catch (error) {
            console.error('Error in get method:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getOneEntity(req, res) {
        try {
            const result = await this.service.getOneEntity(req, res);
            res.json(result);
        } catch (error) {
            console.error('Error in getOneEntity method:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async update(req, res) {
        try {
            const result = await this.service.update(req, res);
            res.json({
                message: 'Update sucess', data: result
            });
        } catch (error) {
            console.error('Error in update method:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async delete(req, res) {
        try {
            const deletedRowCount = await this.service.delete(req, res);
            res.json({ message: 'Deleted sucessfully', deletedRowCount: deletedRowCount });
        } catch (error) {
            console.error('Error in delete method:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async create(req, res) {
        try {
            const newRow = await this.service.create(req, res);
            if (newRow) {
                res.json({
                    message: 'Created succefully',
                    data: newRow
                });
            }
            else {
                res.status(500).json({ message: 'Failed to create entity' });
            }
        } catch (error) {
            console.error('Error in create method:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default BaseController;

