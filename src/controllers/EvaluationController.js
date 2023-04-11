const { Sequelize } = require('sequelize');
const connection = require('../database');
const Evaluation = require('../models/Evaluation');
const EvaluationOption = require('../models/EvaluationOption');

class EvaluationController {

    async postEvaluation(req, res) {
        const transactionInstance = await connection.transaction({
            isolationLevel: Sequelize.Transaction.READ_UNCOMMITED,
        });

        try {
            const evaluations = req.body;

            for (let i in evaluations) {
                await Evaluation.create({
                    id_question: evaluations[i].id_question,
                    id_customer: evaluations[i].id_customer,
                    id_session: evaluations[i].id_session,
                    answer: evaluations[i].answer,
                    comment: evaluations[i].comment
                }, {
                    transaction: transactionInstance
                });

                for (let i1 in evaluations[i].options) {
                    await EvaluationOption.create({
                        id_question: evaluations[i].id_question,
                        id_session: evaluations[i].id_session,
                        id_option: evaluations[i].options[i1],
                    }, {
                        transaction: transactionInstance
                    });            
                }
            }

            await transactionInstance.commit();
            
            return res.status(201).json({"message": "Evaluations and options saved."});

        } catch (error) {
            await transactionInstance.rollback();

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