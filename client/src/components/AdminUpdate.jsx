import React, { Component } from 'react'
import Slide from '../images/slide.jpg';

export default class AdminUpdate extends Component {
  state={
    adminInfo:{
      username:'',
      password:'',
      role:'',
    },
  }

  componentDidMount(){
    this.getAdminInfo();
  }

  getAdminInfo =async() => {
    const result = await fetch(`http://localhost:9999/api/user/${this.props.id}`,{
      method:'GET'
    }).then((res)=> res.json());
    if(!result.success){
      window.alert(result.message)
    }else{
      this.setState({
        adminInfo:{
          ...this.state.adminInfo,
          ...result.user,
        }
      });
      console.log(this.state.adminInfo);
    }
  }

  adminInfoChange = (newAdminInfo) => {
    this.setState({
      adminInfo:{
        ...this.state.adminInfo,
        ...newAdminInfo,
      }
    });
  }

  adminInfoSubmit = async(e) => {
    e.preventDefault();
    const result = await fetch(`http://localhost:9999/api/user/edit/${this.props.id}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state.adminInfo)
    }).then((res)=> res.json());
    if(!result.success){
      window.alert(result.message);
    }else{
      window.alert('admin updated');
      window.location.href = `/admin-manager/${window.localStorage.userId}`;
    }
  }

  render() {
    return (
      <form className='admin-update-form' onSubmit={this.adminInfoSubmit}>
        <div class="background">
            <img src={Slide} alt=""/>
        </div>
        <div class="update">
          <div class="update-bound">
              <div class="update-title">
                <h2>{this.props.id}</h2>
              </div>
              <ul>
                  <li>
                    <input placeholder="Username" value={this.state.adminInfo.username} onChange={(e) => this.adminInfoChange({username:e.target.value})} />
                  </li>
                  <li>
                    <input placeholder="Password" value={this.state.adminInfo.password} onChange={(e) => this.adminInfoChange({password:e.target.value})} />
                  </li>
                  <li>
                    <div class="update-role">
                      Role: {this.state.adminInfo.role}
                    </div>
                    <button type='submit'>update</button>
                  </li>
              </ul>
          </div>
      </div>
      </form>
    )
  }
}
