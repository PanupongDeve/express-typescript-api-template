import { IStudenRepositoy } from '../../repository/student/interface/IStudentRepositoy';
import { IStudentService } from './interface/IStudentService'



export class StudentService implements IStudentService {
    studentRepository: IStudenRepositoy;

    constructor(studentRepository: IStudenRepositoy) {
        this.studentRepository = studentRepository
    }

    getStudentList = () => {
        return this.studentRepository.getStudentList()
    }
}