const Exam = require('../model/login_signup')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




exports.Singup = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const data = await Exam.create(req.body)
       
        res.status(200).json({
            status: "sucsses",
            Message: "Singup sucseesfully",
            data: data
        })

    } catch (error) {
        res.status(404).json({
            status: "not found",
            Message: error.Message,
        })
    }
}

exports.Login = async (req, res) => {
    try {
        const login = await Exam.findOne({ email: req.body.email });
        if (!login) throw new Error("Invalid email");

        main(login)
        const verypassword = await bcrypt.compare(req.body.password, login.password);
        if (!verypassword) throw new Error('Invalid password');

        const token = jwt.sign({ id: login._id }, "surat");

        res.status(200).json({
            status: "success",
            message: "User logged in successfully",
            data: login,
            token
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};