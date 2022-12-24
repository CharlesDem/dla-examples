import { body, param, query, ValidationChain } from "express-validator"

export const adminValidators = (method: string): ValidationChain[] => {
    switch (method) {
      case 'create': {
       return [ 
          body('personneNom', 'doesn\'t exists').exists(),
          body('personneNom', 'too long (max 50)').isLength({max:50}),
          body('personnePrenom', 'doesn\'t exists').exists(),
          body('personneNom', 'too long (max 50)').isLength({max:50}),
          body('email', 'Invalid email').exists().isEmail(),
          body('service', 'Service must be of type "[Compta, RH, Support]"').exists().isIn(['Compta', 'RH', 'Support'])
         ]   
      }

      case 'findAll': {
        return [
          query('service', 'invalid filter').optional().isIn(['Compta', 'RH', 'Support']),
          query('service', 'Only one value can be sent').not().isArray()
          
        ]
      }

      case 'findOrDelete': { //TODO générifier ?
        return [
            param('id', 'id not valid').exists().isNumeric()
        ]
      }

      case 'update': {
        return [
            body('service', 'Service must be of type "[Compta, RH, Support]"').exists().isIn(['Compta', 'RH', 'Support']) 
        ]
      }

      default: return []

    }
  }