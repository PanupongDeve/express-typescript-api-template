import { Router, Request, Response, createRouter } from '../../../utils/express';

import { StudentRepository } from '../../../repository/student/student.repositoy';
import { StudentService } from '../../../services/student/student.service';
import { toSnakeCase } from '../../../utils/toSnakeCase';

const contentRouter = Router();


const studentRepository = new StudentRepository();
const studentService = new StudentService(studentRepository);

contentRouter.get('/student-list', (req: Request, res: Response) => {

    res.send({
        status: 200,
        data: toSnakeCase(studentService.getStudentList())
    });
})

const studentRouter = createRouter('v1', 'students', contentRouter);


export default studentRouter