import { Form } from "./Form";
// import { useDispatch } from "react-redux";
// import { setUser  } from "../pages/store/slices/userSlice";
import { useNavigate } from "react-router-dom";

export const Login = ({setIsAdmin,setIsLoggedIn}) => {
    // const dispatch = useDispatch(); 
    const history = useNavigate();


    const handleLogin = async (email, password) => {
		try{
			const responce = await fetch('https://doctor-study-project.herokuapp.com/auth/login',{
				method:'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body: JSON.stringify({username:email,password})
			})
			const data = await responce.json()
			if(responce.status === 200){
				if(data.user.token){
					localStorage.setItem('isLoggedIn','true')
					history("/")
					setIsLoggedIn(true)
				}
				if(data.user.role === 'admin'){
					localStorage.setItem('isAdmin','true')
					setIsLoggedIn(true)
					setIsAdmin(true)
				}
			}else{
				alert(data.message)
			}

		}catch(err){
			alert(err)
			console.log(err);
		}
    }

    return(
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
}