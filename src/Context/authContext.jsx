import { useState } from "react"
import { createContext } from "react"



export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {

    const [token , setToken ] = useState(null);

    function insertUserToken(tkn){
        setToken(tkn)
    }
console.log(tokengit);

  return (
    <AuthContext.Provider value={
        {
            token,
            insertUserToken,
        }
    }>

<>{children}</>
    </AuthContext.Provider>
  )
}

export default AuthContextProvider