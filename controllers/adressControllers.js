let adressController = {};

const Dadata = require('dadata-suggestions');
const dadata = new Dadata(process.env.DADATA_KET);

const createError = require('http-errors');

adressController.getAdress = (req, res, next) =>{
  dadata.address({ query: req.query.adress, count: 5 })
      .then((data) => {
        res.status(200).json({
          data: {
            adresses: data.suggestions.map((element)=>{
              return {
                adress : element.unrestricted_value,
                fias : element.data.fias_id
              }
            })
          }
        })
      })
      .catch((err)=>{
        next(createError(500, err));
      })
}

module.exports = adressController;