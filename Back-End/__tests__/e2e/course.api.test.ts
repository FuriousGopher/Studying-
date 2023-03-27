import request from 'supertest'

import {app} from '../../src'


describe('/course', () =>{

    beforeAll(async  ()=>{
        await request(app).delete('/__test__/data')
    })
    it(`should create course with correct input data`, async ()=>{
        await request(app)
            .post('/courses')
            .send({ title: 'aaaaaa'})

    })

})