import * as dotenv from 'dotenv'
import sequelize from './core/database/sequelize'
import { createServer } from './core/server'
import { logger } from './winston.logger'

dotenv.config()

createServer().then(app => {
    sequelize.sync({ force: true })

    app.listen(process.env.PORT, () => logger.info('Running.'))
})




