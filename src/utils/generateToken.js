import jwt from 'jsonwebtoken'
import dotenvJSON from './dotenv.json' 
const authConfig = dotenvJSON.JWT_SECRET_KEY

export default function(params = {}){
        return jwt.sign(params, authConfig, {
            expiresIn: 86400
        })
}