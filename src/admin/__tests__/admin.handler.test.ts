import request from 'supertest'
import {Express} from 'express-serve-static-core'
import { AdminService } from '../admin.service';
import { Server } from 'http';
import { createServer } from '~/core/server';
import { NotFoundError } from '~/core/errors/errors';
import { AdminHandler } from '../controller/admin.handler';
import { AdminRepository } from '../data/admin.repository';
import { Request } from 'express';


jest.mock('../admin.service')

let app: Express
let serverRunning: Server
let adminHandler = new AdminHandler(new AdminService(new AdminRepository()))
beforeAll(async () => {
  
  //AdminService.prototype.findById = jest.fn().mockRejectedValue(new NotFoundError('test'))

 // app = await createServer();
 // serverRunning = app.listen(5000, () => console.log('Test serv running'))
})

afterAll(async () => {
 // serverRunning.close()
})

describe("admin handler", () => {

//TODO

  describe("getUsers", () => {
    it("should return empty array", async () => {
      AdminService.prototype.findById = jest.fn().mockRejectedValue(() => new NotFoundError('test'))

  //    const req: Request = { params: { name: 'Bob' }  };

      const res = { text: '',
          send: function(input: string) { this.text = input } 
      };

      const next = {}

 //     const users = await adminHandler.find (req, res, next);
     // console.log(users.message)

   //   expect(users).toEqual([]);

     // expect(spy).toHaveBeenCalledWith();
  //    expect(spy).toHaveBeenCalledTimes(1);
  //    spy.mockRestore();
    });
  });
});
