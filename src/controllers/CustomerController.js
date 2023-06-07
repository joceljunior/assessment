const Customer = require('../models/Customer');
const Session = require('../models/Session');

class CustomerController {
    async postCustomer(req, res) {
       const request = req.body;

       const customer = await Customer.create(request);

        return res.json(customer);
    }

    async getCustomer(req, res) {
      try {
        var customers = await Customer.findAll();
        return res.json(customers);

      } catch (error) {
        console.log(error)
      }

    }

    async getCustomerUrl(req, res) {
        try {
          var date = new Date().toLocaleTimeString();
          var url = req.params['url'];
          var customer = await Customer.findAll({where: {url : url}
          });
          var idCustomer = customer[0]["id"];
          var session = {
            "id": null,
            "id_customer":idCustomer,
            "created_at": date,
            "updated_at": date
          }
          var obj = await Session.create(session);

          var response = 
            {
              "id": idCustomer,
              "name": customer[0]['name'],
              "url": customer[0]['url'],
              "created_at": customer[0]['created_at'],
              "updated_at": customer[0]['updated_at'],
              "id_session": obj['id']
            }
          
    
            return res.json(response);
          
        } catch (error) {
          
        }

    }
 
    async updateCustomer(req, res) {
        var customerEdit = req.body;
        var id = customerEdit["id"];
        var customer = await Customer.update({"name": customerEdit["name"], "url": customerEdit["url"]}, {where: {
            Id: id
          }});
  
          return res.json(customer);
    }
}

module.exports = new CustomerController();