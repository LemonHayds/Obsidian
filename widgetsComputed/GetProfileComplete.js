return function(){

    let currentUser = this.GetCurrentUser()

    if(currentUser.profileComplete == null){
        return false
    }   
    else if(currentUser.profileComplete == true){
        return true
    }

}