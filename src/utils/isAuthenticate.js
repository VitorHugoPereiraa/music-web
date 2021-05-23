 function isAuthenticate(){
    const user = localStorage.getItem('auth-token')

    if(!user){
        return false
    }else{
        return true
    }

}

export default isAuthenticate 