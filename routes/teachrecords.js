const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher')


const teachrecords = [
    {
      nationalID: "1692869743557",
      title: "Mr.",
      firstname: "Abigael",
      surname: "Lebanon",
      dateOfBirth: "1987-08-17T09:30:09.988Z",
      teacherNumber: "3727372838",
      salary: "N280000",
    },
    {
      nationalID: "16928182869557",
      title: "Mr.",
      firstname: "Nurudeen",
      surname: "Afolabi",
      dateOfBirth: "1987-08-17T09:30:09.988Z",
      teacherNumber: "3737181381",
      salary: "N300000",
    },
    {
      nationalID: "16928699293557",
      title: "Mr.",
      firstname: "Gaga",
      surname: "Isaac",
      dateOfBirth: "1988-08-17T09:30:09.988Z",
      teacherNumber: "278281813",
      salary: "N350000",
    },
    {
      nationalID: "1692819369557",
      title: "Mr.",
      firstname: "Stephen",
      surname: "Oriade",
      dateOfBirth: "1989-08-17T09:30:09.988Z",
      teacherNumber: "91817373",
      salary: "N300000",
    },
    {
      nationalID: "1692860839557",
      title: "Mr.",
      firstname: "Thompson",
      surname: "Ogoni",
      dateOfBirth: "1985-08-17T09:30:09.988Z",
      teacherNumber: "38282823737",
      salary: "N150000",
    },
  ]

//api/teachrecords
router.get('/', async (req, res) => {
    try {
      const Teachers = await Teacher.find();
      res.json( {success: true, data: Teachers} );
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Something went wrong' })
    }



    // if (!teachrecords) {
    //     return res.status(404).json({ success: false, error: 'Resource not found' });
    // }
    
})

//api/teachrecords
router.post('/', async (req, res)=> {
    const rawData = new Teacher({
      firstname: req.body.firstname,
      surname: req.body.surname,
      nationalID: req.body.nationalID,
      title: req.body.title,
      teacherNumber: req.body.teacherNumber,
      dateOfBirth: req.body.dateOfBirth,
      salary: req.body.salary
    })

    try {
      const savedTeacher  = await rawData.save();
      res.json({ success: true, data: savedTeacher })
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Something went wrong' })
    }

   
})

module.exports = router;