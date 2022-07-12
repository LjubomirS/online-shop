import { 
    signInWithGooglePopup, createUserDocumentFromAuth,
} from '../../utility/firebase/firebase.utility.js'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';


const SignIn = ()=>{

    const logGooglePopupUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
           <h1>Sign In page</h1> 
           <button onClick={logGooglePopupUser}>
                Sign in with Google Popup 
           </button>
           <SignUpForm />
        </div>
    )
}

export default SignIn;