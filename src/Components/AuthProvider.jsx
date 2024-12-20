import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import axios from "axios";

export const authorizedContext = createContext()


const AuthProvider = ({children}) => {
    const[loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    const registerUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            if(currentUser?.email){
                const user = {
                    email : currentUser.email
                }

                axios.post(`http://localhost:4000/jwt`,user,{withCredentials : true})
                .then(res=>{
                    console.log(res.data);
                })
            }
            else{

                axios.post(`http://localhost:4000/logout`,{},{withCredentials: true})

            }
        setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
        
    
    },[])

    const provider = new GoogleAuthProvider();

    const googleLoginBtn =()=>{
       
        setLoading(true)
        return  signInWithPopup(auth,provider)
        
    }


    const Logout =()=>{
        return signOut(auth)
    }




    const authInfo = {
        loading,
        registerUser,
        loginUser,
        googleLoginBtn,
        user,
        Logout,


    }
    return (
        <authorizedContext.Provider value={authInfo}>{children}

        </authorizedContext.Provider>
    );
};

export default AuthProvider;