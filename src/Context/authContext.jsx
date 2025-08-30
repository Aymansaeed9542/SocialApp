import { useEffect, useState } from "react"
import { createContext } from "react"



export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {

    const [token , setToken ] = useState(null);


    useEffect(function(){ 
        if (localStorage.getItem("token")!= null) {
            setToken(localStorage.getItem("token"));
        }

    },[])


    function logout(){
  localStorage.removeItem("token");
   setToken(null);
}

    function insertUserToken(tkn){
        setToken(tkn)
    }
console.log(token);

  return (
    <AuthContext.Provider value={
        {
            token,
            insertUserToken,
            logout,
        }
    }>

<>{children}</>
    </AuthContext.Provider>
  )
}

export default AuthContextProvider