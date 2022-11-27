const users = [
    { id: 1,
      name: "pedro",
      age: 30 }
    ,
    { id: 2,
      name: "diego",
      age: 20 }
  ]
  function updateUser(userObject, prop, value) {
    userObject[prop] = value;
  }
  updateUser(users[0], 'name' ,'pedr');
  console.log(users[0]);