import React, { Component } from 'react';
import '../css/addtourguild.css';
import Slide from '../images/slide.jpg';

export default class AddTourGuide extends Component {
    state={
        assignInfo:{
            jobId: this.props.id,
            adminId:null,
        },
        adminList:[],
        jobWorkerInfo:{}
    }

    componentDidMount(){
        this.getAllAdmin();
        this.getJobInfo();
    }

    getJobInfo = async () => {
        const result = await fetch(`http://localhost:9999/api/job/${this.props.id}`,{
            method:'GET',
        }).then((res)=> res.json());
        if (!result.success){
            window.alert(result.message);
        }else{
            this.setState({
                jobWorkerInfo:result.job.worker,
            });
            console.log(this.state.jobWorkerInfo);
            if(result.job.worker != null){
                this.setState({
                    assignInfo:{
                        ...this.state.assignInfo,
                        adminId: result.job.worker._id,
                    }
                });
            }
        }
    }

    getAllAdmin = async () => {
        const result = await fetch(`http://localhost:9999/api/user`,{
            method:'GET',
        }).then((res)=> res.json());

        if(!result.success){
            window.alert(result.message);
        }else{
            this.setState({
            adminList: result.allUser,
            });
        }
    }

    assignInfoSubmit = async() => {
        const result = await fetch(`http://localhost:9999/api/job/assignJob`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state.assignInfo)
        }).then((res)=> res.json());
        if(!result.success){
            window.alert(result.message);
        }else{
            window.alert('request success');
        }
    }

    addGuide = async(adminId) => {
        await this.setState({
            assignInfo:{
                ...this.state.assignInfo,
                adminId: adminId
            }
        });
        console.log(this.state.assignInfo.adminId);
        await this.assignInfoSubmit();
        window.location.href = `/job-detail/${this.props.id}`;
    }

    deleteGuide = async() => {
        await this.setState({
            assignInfo:{
                ...this.state.assignInfo,
                adminId: null
            }
        });
        console.log(this.state.assignInfo.adminId);
        this.assignInfoSubmit();
    }

  render() {
    return (
      <section className='add-tour-guide'>
      
        <div class="background">
            <img src={Slide} alt=""/>
        </div>
        <div className="add-admin-form">
            {this.props.id}
                {this.state.assignInfo.adminId == null ? (
                    this.state.adminList.map((admin) => 
                        <div className='addtour-item' key={admin._id}>
                            <div class="addtour-username">{admin.username}</div>
                            <button onClick={(e) => {this.addGuide(admin._id)}}>Add guide</button>
                        </div>
                    )
                ) : (
                    this.state.adminList.map((admin) =>{
                        if(admin._id == this.state.assignInfo.adminId){
                            return (
                                <div className='addtour-item' key={admin._id}>
                                    <div class="addtour-username">{admin.username}</div>
                                    <button onClick={(e) => {this.deleteGuide()}} className="addtour-button">Delete guide</button>
                                </div>
                            );
                        }else{
                            return null;
                        }
                    })
                )}
        </div>
        
      </section>
    )
  }
}
