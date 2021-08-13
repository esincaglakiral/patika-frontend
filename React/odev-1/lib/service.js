import axios from 'axios'

const getData = async (userId) => {
  try {
    const { data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const { data: userPosts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    
    return { user, userPosts }
  }
  catch (err) {
    return err
  }  
}

export default getData