return function(){

    const users = $getGrid('users')
    let currentUser = _.find(users, { user: fbUser.uid })

    return currentUser

}