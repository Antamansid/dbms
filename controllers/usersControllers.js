let usersController = {};

const createError = require('http-errors');
const User = require('../models/user');
const mongoos = require('mongoose');

usersController.getUsers = (req, res, next)=>{
  /* model query
  {
    dateStart: date,
    dateEnd: date,
    fio: string
  }
  */
  if(req.query.fio){
    if(req.query.dateStart && req.query.dateEnd){
      let dateStart = new Date(req.query.dateStart);
      dateStart.setHours(0, 0, 0, 0);
      let dateEnd = new Date(req.query.dateEnd);
      dateEnd.setHours(23, 59, 59, 999);
      //$caseSensitive default false. good)))
      User.paginate({
        date: {$gte: dateStart, $lte : dateEnd},
        deleted: false,
        $text :{$search: req.query.fio}
      },{
        sort: { date: -1 },
        limit: 20
      }).then((result)=>{
        res.status(200).json({
          data: result
        })
      }).catch((err)=>{
        next(createError(418, err));
      })
    } else if (req.query.dateStart){
      let dateStart = new Date(req.query.dateStart);
      dateStart.setHours(0, 0, 0, 0);
      User.paginate({
        date: {$gte: dateStart},
        deleted: false,
        $text :{$search: req.query.fio}
      },{
        sort: { date: -1 },
        limit: 20
      }).then((result)=>{
        res.status(200).json({
          data: result
        })
      }).catch((err)=>{
        next(createError(418, err));
      })
    } else if (req.query.dateEnd){
      let dateEnd = new Date(req.query.dateEnd);
      dateEnd.setHours(23, 59, 59, 999);
      User.paginate({
        $text :{$search: req.query.fio},
        date: {$lte : dateEnd},
        deleted: false
      },{
        sort: { date: -1 },
        limit: 20
      }).then((result)=>{
        res.status(200).json({
          data: result
        })
      }).catch((err)=>{
        next(createError(418, err));
      })
    } else {
      User.paginate({
        $text :{$search: req.query.fio},
        deleted: false
      },{
        sort: { date: -1 },
        limit: 20
      }).then((result)=>{
        res.status(200).json({
          data: result
        })
      }).catch((err)=>{
        next(createError(418, err));
      })
    }
  } else {
    if(req.query.dateStart && req.query.dateEnd){
      let dateStart = new Date(req.query.dateStart);
      dateStart.setHours(0, 0, 0, 0);
      let dateEnd = new Date(req.query.dateEnd);
      dateEnd.setHours(23, 59, 59, 999);
      User.paginate({
        date: {$gte: dateStart, $lte : dateEnd},
        deleted: false
      },{
        sort: { date: -1 },
        limit: 20
      }).then((result)=>{
        res.status(200).json({
          data: result
        })
      }).catch((err)=>{
        console.log('working');
        next(createError(418, err));
      })
    } else if (req.query.dateStart){
      let dateStart = new Date(req.query.dateStart);
      dateStart.setHours(0, 0, 0, 0);
      User.paginate({
        date: {$gte: dateStart},
        deleted: false
      },{
        sort: { date: -1 },
        limit: 20
      }).then((result)=>{
        res.status(200).json({
          data: result
        })
      }).catch((err)=>{
        next(createError(418, err));
      })
    } else if (req.query.dateEnd){
      let dateEnd = new Date(req.query.dateEnd);
      dateEnd.setHours(23, 59, 59, 999);
      User.paginate({
        date: {$lte : dateEnd},
        deleted: false
      },{
        sort: { date: -1 },
        limit: 20
      }).then((result)=>{
        res.status(200).json({
          data: result
        })
      }).catch((err)=>{
        next(createError(418, err));
      })
    } else {
      User.paginate({
        deleted: false
      },{
        sort: { date: -1 },
        limit: 20
      }).then((result)=>{
        res.status(200).json({
          data: result
        })
      }).catch((err)=>{
        next(createError(418, err));
      })
    }
  }
}
usersController.postUser = (req, res, next) =>{
  console.log(req.body.date);
  if(!req.body.fio){
    next(createError(400, 'expected FIO user'));
  } else if(!req.body.adress){
    next(createError(400, 'expected adress'));
  } else if(!req.body.fias){
    next(createError(400, 'expected fias'));
  } else {
    let user = new User({
      fio: req.body.fio,
      telephone: req.body.telephone,
      adress: req.body.adress,
      fias: req.body.fias,
      date: req.body.date,
      _id: new mongoos.Types.ObjectId()
    });
    user.save().then((result)=>{
    }).catch((err)=>{
      next(createError(418, err));
    })
    res.status(201).json({
      user
    })
  }
}
usersController.deleteUser = (req, res, next)=>{
  if(!req.query.id){
    next(createError(400, 'expected id user'));
  } else {
    User.findByIdAndUpdate(req.query.id, {
      deleted: true
    }, {
      new: true
    }).exec().then((result)=>{
      if(result === null){
        next(createError(400, 'id not found'));
      } else {
        res.status(201).json({
          data: result
        })
      }
    }).catch((err)=>{
      next(createError(418, err));
    })
  }

}

module.exports = usersController;