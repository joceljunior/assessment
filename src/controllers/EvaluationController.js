// const { Sequelize, sequelize } = require('../models');
const Evaluation = require('../models/Evaluation');
const EvaluationOption = require('../models/EvaluationOption');

class EvaluationController {

    async postEvaluation(req, res) {
        try {
            const evaluations_json = req.body;
            
            // const t = await sequelize.transaction({
            //     isolationLevel: Sequelize.Transaction.READ_UNCOMMITED,
            // });

            // await connection.transaction(async function (transaction) {
                const evaluation = await Evaluation.create({
                    id_question: evaluations_json.id_question,
                    id_customer: evaluations_json.id_customer,
                    answer: evaluations_json.answer,
                    comment: evaluations_json.comment
                });            

                for (let i in evaluations_json.options) {
                    const evaluationOption = await EvaluationOption.create({
                        id_question: evaluations_json.id_question,
                        id_session: evaluations_json.id_session,
                        id_option: evaluations_json.options[i],
                    });            
                }
            // });
            
            return res.status(201).json({"message": true});

        } catch (error) {
            return res.status(500).json({"message": error.message});
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