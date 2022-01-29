const studentModel = require("../model/students")

const getStudents = async (req, res) => {
    try {

        const students = await studentModel.find().exec()

        res.json(students)

    } catch (err) {
        console.log(err);

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const addStudent = async (req, res) => {
    try {
        const newStudent = req.body

        const student = new studentModel({
            name: newStudent.name,
            age: newStudent.age
        })

        const studentSaved = await student.save()

        res.json({
            message: 'The student was saved correctly',
            newStudent
        })

    } catch (error) {
        console.error("Error in POST /students", error)

        res.json({
            message: "The student was not saved :("
        })
    }
}

module.exports = { getStudents, addStudent }