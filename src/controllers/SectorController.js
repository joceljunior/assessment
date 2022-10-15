const Sector = require('../models/Sector');

class SectorController {
    async postSector(req, res) {
       const request = req.body;

       const sector = await Sector.create(request);

        return res.json(sector);
    }

    async getSector(req, res) {
       var sectors = await Sector.findAll();
 
         return res.json(sectors);
     }

     async updateSector(req, res) {
        var sectorEdit = req.body;
        var id = sectorEdit["id"];
        var sector = await Sector.update({"name": sectorEdit["name"],}, {where: {
            Id: id
          }});
  
          return res.json(sector);
      }
}

module.exports = new SectorController();