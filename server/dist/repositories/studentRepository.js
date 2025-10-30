import fs from 'fs';
import { StudentType } from '../models/studentType.js';
const studentData = './src/data/student_db.json';
function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err)
                reject(err);
            resolve(data);
        });
    });
}
export const getStudents = async () => {
    return JSON.parse(await readFile(studentData));
};
export const getStudent = async (id) => {
    const students = await getStudents();
    return students.find((student) => student.id === id) || null;
};
export const addStudent = async (student) => {
    const students = await getStudents();
    students.push(new StudentType(student));
    fs.writeFileSync(studentData, JSON.stringify(students, null, 2));
    return student;
};
export const updateStudent = async (id, updatedStudent) => {
    const students = await getStudents();
    const index = students.findIndex((student) => student.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updatedStudent };
        fs.writeFileSync(studentData, JSON.stringify(students, null, 2));
        return students[index];
    }
    return null;
};
export const deleteStudent = async (id) => {
    const students = await getStudents();
    const index = students.findIndex((student) => student.id === id);
    if (index !== -1) {
        const deletedStudent = students.splice(index, 1)[0];
        fs.writeFileSync(studentData, JSON.stringify(students, null, 2));
        return deletedStudent;
    }
    return null;
};
//# sourceMappingURL=studentRepository.js.map