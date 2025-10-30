import { Query, Mutation, Args, ID, Arg } from 'type-graphql'
import { StudentInputType, StudentType } from './studentType.js';
import { deleteStudent, getStudents, updateStudent, getStudent, addStudent } from '../repositories/studentRepository.js';
import { UserType } from './userType.js';

export class ClearanceResolver {
    @Query(returns => [StudentType!])
    public async getStudents(): Promise<StudentType[]> {
        return await getStudents();
    }

    @Query(returns => StudentType)
    public async getStudent(@Arg("id", () => ID) id: string): Promise<StudentType | null> {
        return await getStudent(id);
    }

    @Mutation(() => StudentType, { nullable: true })
    public async updateStudent(@Arg("id", () => ID) id: string, @Arg("data", () => StudentInputType) data: StudentInputType): Promise<StudentType | null> {
        return await updateStudent(id, data);
    }

    @Mutation(() => Boolean)
    public async addStudent(@Arg("data", () => StudentInputType, { nullable: false }) data: StudentInputType): Promise<boolean> {
        return await addStudent(new StudentInputType(data)) ? true : false;
    }
    @Mutation(returns => Boolean)
    public async deleteStudent(@Arg("id", () => ID) id: string): Promise<boolean> {
        const deletedStudent = await deleteStudent(id);
        return deletedStudent ? true : false;
    }




}
