import { Request, Response } from 'express';

import { RESULT, ERROR_VI } from '../../types/enum';
import { Controller } from '../../types/interface';
import { BadRequestError, ConflictError, NotFoundError, UnauthorizedError } from '../../errors';

import { User } from '../../models';
import * as Utils from '../../utils';
import { RegisterDto, UpdateDto } from './user.dto';
import { auth, checkAdmin } from '../../middlewares';


export const userControllers = {
    // GET Request
    me: async (req: Request, res: Response) => {
        res.send({
            result: RESULT.success,
            user: req.user,
        })
    },

    signIn: async (req: Request, res: Response) => {
        const { email, password } : RegisterDto = req.body;

        const thatUser = await User.findOne({email});
        
        if (
            thatUser === null ||
            ! await Utils.password.compare(thatUser.password, password)
        ) 
        throw new UnauthorizedError();

        const token = Utils.token.gen({id: thatUser._id, admin: thatUser.admin});

        res.send({
            result: RESULT.success,
            user: thatUser,
            token: token,
        });
    },

    getOne: async (req: Request, res: Response) => {
        const id: string = req.params.id;

        const thatUser = await User.findById(id);

        res.send({
            result: RESULT.success,
            user: thatUser,
        })
    },

    getAll: async (req: Request, res: Response) => {
        const allUsers = await User.find();

        res.send({
            result: RESULT.success,
            users: allUsers,
        })
    },


    // POST Request
    signUp: async (req: Request, res: Response) => {
        const { email, password, username } : RegisterDto = req.body;
    
        const conflict = await User.findOne({ email });
        if (conflict != null) throw new ConflictError();
        
        const newUser = await User.create({ email, password, username });
    
        const token = Utils.token.gen({id: newUser._id, admin: newUser.admin});
    
        res.status(201).send({
            result: RESULT.success,
            user: newUser,
            token: token,
        });
    },

    refreshToken: async (req: Request, res: Response) => {
        const refreshToken = req.body.refreshToken;
    
        const thatUser = await User.findOne({ refreshToken });
        if (thatUser === null) throw new NotFoundError();
                
        const token = Utils.token.gen({id: thatUser._id, admin: thatUser.admin});
        const newRefreshToken = Utils.token.newRefreshToken();
    
        res.send({
            result: RESULT.success,
            token: token,
            refreshToken: newRefreshToken,
        });
    },


    // Update
    update: async (req: Request, res: Response) => {
        const { password, username } : UpdateDto = req.body;
    
        const currentUser = await User.findById(req.user!.id);
        if (!currentUser) throw new NotFoundError();

        if (password) currentUser!.password = password;
        if (username) currentUser!.username = username;

        currentUser.save();

        res.send({
            result: RESULT.success,
            user: currentUser,
        });
    },
}
