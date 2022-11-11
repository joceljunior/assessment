const Evaluation = require('../models/Evaluation');

class EvaluationController {
    async postEvaluation(req, res) {
        try {
            const evaluations = req.body;

            await Evaluation.bulkCreate(evaluations);
            
            return res.json({"message": true});

        } catch (error) {
            return res.status(400);
        }
      
    }
}

module.exports = new EvaluationController();