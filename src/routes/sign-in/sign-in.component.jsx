import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utility/firebase/firebase.utility.js'



const SignIn = ()=>{
    const logUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
           <h1>Sign In page</h1> 
           <button onClick={logUser}>
                Sign in with Google Popup 
           </button>
        </div>
    )
}

export default SignIn;