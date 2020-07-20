const users = [];

//addUser - removeUser - getUser - getUsers

const addUser = ({id, username, room}) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()


    //valida the data
    if(!username || !room){
        return {
            error: 'username and room are required!'
        }
    }
    //check for existing user
    const exisitingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })

    //validate username
    if(exisitingUser){
        return{
            error: 'Username is in use!'
        }
    }

    //store user in the users array
    const user = {id, username, room}
    users.push(user)
    return { user }
}

//removeUser
const removeUser = (id)=>{
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1){
        return users.splice(index, 1) [0]
    }
}

//getUser
const getUser = (id) =>{
    //find return the match if exist or undefinde if not.
    return users.find((user)=> user.id === id) 
}

//getUser
const getUsersInRoom = (room) =>{
    //find return the match if exist or undefinde if not.
    return users.filter((user)=> user.room === room) 
}



module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}


//testing

/**
 *   addUser({id:12, username:'vil', room:'cumana'})
  addUser({id:21, username:'marius', room:'dublin'})
  addUser({id:3, username:'vil', room:'dublin'})
console.log(users)
 */


/**
 * const res = addUser({id:1, username:'vil', room:'dublin'})
console.log(res)
 */

 /**
  *  const removedUser = removeUser(1)
 console.log(removedUser)
 console.log(users)
  */

//const user = getUser(12)
//console.log(user)

/**
 * const userList = getUsersInRoom('du')
console.log(userList)
 */



