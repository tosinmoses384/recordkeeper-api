const express = require('express');
const router = express.Router();
const Student = require('../models/Student')

  const studrecords = [
    {
      nationalID: "169286938291557",
      firstname: "John",
      surname: "Ude",
      dateOfBirth: "2005-08-17T09:30:09.988Z",
      studentNumber: "98738772",
    },
    {
      nationalID: "16928610399557",
      firstname: "Claron",
      surname: "Mary",
      dateOfBirth: "2004-08-17T09:30:09.988Z",
      studentNumber: "3736288222",
    },
    {
      nationalID: "16928698374557",
      firstname: "Magaret",
      surname: "Olufande",
      dateOfBirth: "2006-08-17T09:30:09.988Z",
      studentNumber: "3732811919",
    },
    {
      nationalID: "16928695591847",
      firstname: "Rebon",
      surname: "Uzziah",
      dateOfBirth: "2007-08-17T09:30:09.988Z",
      studentNumber: "19192998383",
    },
    {
      nationalID: "1692869173843557",
      firstname: "Alibaba",
      surname: "Bamaba",
      dateOfBirth: "2009-08-17T09:30:09.988Z",
      studentNumber: "8838727474747377",
    },
  ]

//api/studrecords
router.get('/', async (req, res) => {
  try {
    const Students = await Student.find();
    res.json( {success: true, data: Students} );
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' })
  }



    // if (!studrecords) {
    //     return res.status(404).json({ success: false, error: 'Resource not found' });
    // }
    // res.json( {success: true, data: studrecords} );
})

//api/studrecords
router.post('/', async (req, res) => {
  const rawData = new Student({
    firstname: req.body.firstname,
    surname: req.body.surname,
    nationalID: req.body.nationalID,
    studentNumber: req.body.studentNumber,
    dateOfBirth: req.body.dateOfBirth
  })

  try {
    const savedStudent  = await rawData.save();
    res.json({ success: true, data: savedStudent })
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' })
  }




//   const rawData = {
//     date: new Date().toISOString().slice(0, 10) // 2023-0126
// }
// studrecords.push(rawData);
// res.json({ success: true, data: rawData })
})


module.exports = router;