import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../css/AdminLogin.css';
import AdminBackground from '../images/adminbackground.png';

export default class AdminLogin extends Component {
    state={
        login:{
            username:'',
            password:''
        },
        authUser:{
            userId:'',
            username:'',
        }
    }

    loginInfoChange = (newInfo) =>{
        this.setState({
            login:{
                ...this.state.login,
                ... newInfo
            }
        });
    }

    loginSubmit = async(event) =>{
        event.preventDefault();
        console.log(this.state.login);

        if (!this.state.login.username || !this.state.login.password){
            window.alert('please input your username and password');
        }else{
            try{
                const result = await fetch(`http://localhost:9999/api/auth/login`,{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(this.state.login)
                }).then((res)=> res.json());

                if(!result.success){
                    window.alert(result.message);
                }else{
                    window.localStorage.setItem('userId', result.userId);
                    window.localStorage.setItem('username', result.username);
                    window.localStorage.setItem('role', result.role);
                    this.setState({
                        authUser: {
                            userId: result.userId,
                            username: result.username,
                        },
                    });
                    console.log(result);
                    window.alert('login successful');
                    window.location.href = `/admin-manager`;
                }
            }catch(error){
                console.log(error.message);
                window.alert(error.message);
            }
            
        }
        
    }

  render() {
    return (
        <div className="Body-admin">
            <img src={AdminBackground}/>
            <div className="Body-In">
                <h1>Admin ? </h1>
                <form className="Body-In-Form" onSubmit={this.loginSubmit}>
                    <input type="text" name="" placeholder="username" onChange={(e) => this.loginInfoChange({username: e.target.value})}/>
                    <input type="password" name="" placeholder="password" onChange={(e) => this.loginInfoChange({password: e.target.value})}/>
                    <button type='submit' >LOGIN</button>
                </form>
            </div>
        </div>
    )
  }
}
