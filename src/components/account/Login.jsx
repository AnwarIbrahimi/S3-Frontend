import AccountService from "../../services/AccountService";
import React from "react";
import './createaccount.scss';


export default function Login(props) {

    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            emailId: emailRef.current.value
        };
        console.log(data);
        AccountService.LoginUser(data.emailId).then((res) => {
            console.log(res.data)
            props.loginData(res.data)
            window.location.href = '/'
        })
    };

    return (
        <div className="createaccount">
            <div className="inner">
                <form onSubmit={handleSubmit}>
                    <h3>Login</h3>

                  <div className="form-group">
                        <label>Email</label>
                        <br/>
                        <input type="email" className="form-control" placeholder="Enter email" ref={emailRef} required />
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" ref={passwordRef} required />
                    </div>
                    
                    <br />
                    <button type="submit" className="btn btn-danger">Sign in</button>
                </form>
            </div>
        </div>
    )
}