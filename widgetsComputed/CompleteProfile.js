return function(){
    var rowKey = this.GetCurrentUserRowKey()

    //Get username
    var username = document.getElementById('obsidian__username').value
    //Set username
    $setDataGridVal('users', rowKey + '.username', username)
    $setDataGridVal('users', rowKey + '.profileComplete', true)

    //Redirect
    $setCurrentSubTab('-NG4sBs0811gcAZsTAF4')

}