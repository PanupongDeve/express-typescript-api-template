import { IStudent } from '../../Interfaces/student.interface';
import { IStudenRepositoy } from './interface/IStudentRepositoy'


export class StudentRepository implements IStudenRepositoy {
    getStudentList = (): IStudent[] => {
        return [
            {
               name: "Panupong Chamomboon",
               studentNo: "5635512110" 
            }
        ]
    }
}