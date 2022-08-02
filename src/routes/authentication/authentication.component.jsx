
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';

import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';

import { AuthContainer } from './authentication.style.jsx'

const Authentication = ()=>{

    return (
        <div>
           <AuthContainer>
            <SignInForm />
            <SignUpForm />
           </AuthContainer>
           
        </div>
    )
}

export default Authentication;