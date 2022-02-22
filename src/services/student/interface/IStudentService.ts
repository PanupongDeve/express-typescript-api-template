import { IStudenRepositoy } from "../../../repository/student/interface/IStudentRepositoy";

export interface IStudentService {
    studentRepository: IStudenRepositoy
    getStudentList: Function
}