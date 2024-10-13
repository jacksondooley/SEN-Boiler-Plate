const axios = require('axios');

async function getUsers() {
  try {
    const response = await axios.get('http://localhost:3000/users');
    console.log('Users:', response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

async function createUser() {
    try {
        const response = await axios.post('http://localhost:3000/users', {
            name: 'John Doe',
            email: 'john.doe@example.com',
            age: 25,
        });
    } catch (error) {
        console.error('Error creating user:', error);
    }
}   

// Execute the function
getUsers();
// createUser();
