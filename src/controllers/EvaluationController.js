const Evaluation = require('../models/Evaluation');
const EvaluationOption = require('../models/EvaluationOption');

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

    async postOption(req, res) {
        try {
            const options = req.body;

            await EvaluationOption.bulkCreate(options);
            
            return res.json({"message": true});

        } catch (error) {
            return res.status(400);
        }
    }



    
}

module.exports = new EvaluationController();