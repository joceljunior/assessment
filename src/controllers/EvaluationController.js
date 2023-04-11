// const { Sequelize, sequelize } = require('../models');
const Evaluation = require('../models/Evaluation');
const EvaluationOption = require('../models/EvaluationOption');

class EvaluationController {

    async postEvaluation(req, res) {
        try {
            const evaluations = req.body;
            
            // const t = await sequelize.transaction({
            //     isolationLevel: Sequelize.Transaction.READ_UNCOMMITED,
            // });

            // await connection.transaction(async function (transaction) {
            for (let i in evaluations) {
                await Evaluation.create({
                    id_question: evaluations[i].id_question,
                    id_customer: evaluations[i].id_customer,
                    answer: evaluations[i].answer,
                    comment: evaluations[i].comment
                });            

                for (let i1 in evaluations[i].options) {
                    await EvaluationOption.create({
                        id_question: evaluations[i].id_question,
                        id_session: evaluations[i].id_session,
                        id_option: evaluations[i].options[i1],
                    });            
                }
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