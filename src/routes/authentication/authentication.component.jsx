import './authentication.style.scss'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';

import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';


const Authentication = ()=>{

    return (
        <div>
           <div className='authContainer'>
            <SignInForm />
            <SignUpForm />
           </div>
           
        </div>
    )
}

export default Authentication;