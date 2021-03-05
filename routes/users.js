var express = require('express');
var router = express.Router();
//ejemplo datos usuarios
let jsonUsers = {
  "users": [
    {
      "id": 123,
      "name": 'Antonio Polo',
      "phone": {
        "home": '999-000-111',
        "mobile": '991-000-111'
      },
      "email": [
        "abc@gmail.com",
        "abc2@gmail.com"
      ],
      "dateOfBirth": "1992-01-02T00:00:00.000Z",
      "registered": true,
    },
    {
      "id": 124,
      "name": 'Francisco Gomez',
      "phone": {
        "home": '999-000-222',
        "mobile": '991-000-222'
      },
      "email": [
        "abc3@gmail.com",
        "abc32@gmail.com"
      ],
      "dateOfBirth": "1992-01-02T00:00:00.000Z",
      "registered": false,
    }
  ]
};
//usuario para probar la actualizacion
const jsonUsersUpdate = {
  "id": 789,
  "name": "Tomás Rabero",
  "phones": {
    "home": "111-000-222",
    "mobile": "112-000-222"
  },
  "registered": true
};

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(jsonUsers);
});

/* GET user by ID. */
router.get('/:id', function (req, res, next) {
  if (req.params.id == 123) {
    res.json(jsonUsers.users[0]);
  } else {
    res.status(400).send('Lo sentimos el item no ha sido encontrado.');
  }
});

/* POST new user */
router.post('/', function (req, res) {
  let newUser = req.body;
  //TODO hacer algo con el usuario
  res.status(200).send('Usuario ' + req.body.name + ' ha sido añadido correctamente');
});

/* PUT update user */
router.put('/:id', function (req, res) {
  let updatedUser = req.body;
  //TODO hacer algo con el usuario actualizado
  res.status(200).send('Usuario ' + req.body.name + ' ha sido actualizado correctamente');
});

/* DELETE delete user */
router.delete('/:id', function (req, res) {
  //TODO hacer algo con el usuario actualizado
  res.status(200).send('Usuario ' + req.params.id + ' ha sido eliminado correctamente');
})

module.exports = router;
