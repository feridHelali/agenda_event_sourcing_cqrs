import * as express from 'express';
import UserService from './UserService';


const router = express.Router();

router.route('/')
.post(UserService.register)
.get(UserService.login);

export default router;