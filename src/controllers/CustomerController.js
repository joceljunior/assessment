const Customer = require('../models/Customer');

class CustomerController {
    async postCustomer(req, res) {
       const request = req.body;

       const customer = await Customer.create(request);

        return res.json(customer);
    }

    async getCustomer(req, res) {
       var customers = await Customer.findAll();
 
         return res.json(customers);
     }

     async getCustomerUrl(req, res) {
        var url = req.params['url'];
        var customer = await Customer.findAll({where: {url : url}
        });
  
          return res.json(customer);
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