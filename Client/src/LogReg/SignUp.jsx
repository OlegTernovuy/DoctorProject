import { Form } from "./Form";
import { useNavigate } from "react-router-dom";


export const SignUp = () => {
    const history = useNavigate();


    const handleRegister = async (email, password) => {
		try{
			const responce = await fetch('https://doctor-study-project.herokuapp.com/auth/registration',{
				method:'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body: JSON.stringify({username:email,password})
			})
			const data = await responce.json()
			
			if(responce.status === 200){
				history("/loginPage")
				alert(data.message)
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
            title="register"
            handleClick={handleRegister}
        />
    )
}