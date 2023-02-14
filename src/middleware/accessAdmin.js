const admins= require('../data/admins.json')

module.exports=(req,res,next)=>{

    if(admins.includes(req.query.admin)){
        next()
    }
    return res.redirect('/not-entry')
}