const Customer = require('../models/Customer');
const TemplateQuestion = require('../models/TemplateQuestion');
const Question = require('../models/TemplateQuestion');

class QuestionController {
    async postQuestions(req, res) {
       const request = req.body;

       const question = await Question.create(request);

        return res.json(question);
    }

    async getQuestions(req, res) {
       var customerId = req.params['id'];
       var questions = await TemplateQuestion.findAll( 
        {
            include: [
                {
                    association: 'customers',
                    where: {
                        id: customerId
                    }
                }
                , 
                {
                    association: 'options',
                }
            ]
       });
 
         return res.json(questions);
     }

     async updateQuestions(req, res) {
        var questionEdit = req.body;
        var id = questionEdit["id"];
        var question = await Question.update({"question": questionEdit["question"],}, {where: {
            Id: id
          }});
  
          return res.json(question);
      }
}

module.exports = new QuestionController();