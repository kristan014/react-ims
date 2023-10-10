import React from "react";
import "../../assets/css/login.css"
import { Link, Navigate } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: {
                email: '',
                password: ''
            },
            isAuthorized: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // update states when chaging inputs
    handleInputChange = (event) => {
        event.preventDefault();

        const value = event.target.value;

        this.setState({
            login: {    
                ...this.state.login,
                [event.target.name]: value
            }
        })

    }

    // on submit of form
    handleSubmit = (event) => {
        event.preventDefault();
        try {
            fetch('http://localhost:3612/api/v1/login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state.login),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        console.log(data)
                        localStorage.setItem('TOKEN',data.token)
                         this.setState({isAuthorized:true})
                    }
                });
        } catch (error) {
            console.log(error)
        }
    };

    render() {
        return <>
            <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    <input type="email" id="form3Example3" name="email" className="form-control form-control-lg"
                        placeholder="Enter a valid email address" onChange={(e) => this.handleInputChange(e)}
                        value={this.state.email} />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input type="password" id="form3Example4" name="password" className="form-control form-control-lg"
                        placeholder="Enter password" onChange={(e) => this.handleInputChange(e)}
                        value={this.state.password} />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-0">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label className="form-check-label" htmlFor="form2Example3">
                            Remember me
                        </label>
                    </div>
                    <Link to="/reset-password" className="text-body">Forgot password?</Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg">Login</button>

                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                        className="link-danger">Register</a></p>
                </div>
            </form>
            {this.state.isAuthorized && <Navigate to="/dashboard" />}

        </>
    }
}

export default authLayout(LoginPage);