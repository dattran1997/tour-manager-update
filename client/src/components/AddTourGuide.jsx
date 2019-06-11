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
        jobList:[],
        jobWorkerInfo:{},
        jobDate:{
            startDate: new Date(),
            endDate: new Date(),
        }
    }

    componentDidMount(){
        this.getAllAdmin();
        this.getJobInfo();
        this.getAllJob();
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
                jobDate:{
                    startDate: result.job.startDate,
                    endDate: result.job.endDate
                },
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

    getAllJob = async () =>{
        const result = await fetch(`http://localhost:9999/api/job`,{
          method:'GET',
        }).then((res)=> res.json());
        if(!result.success){
          window.alert(result.message);
        }else{
          this.setState({
            jobList: result.allJob,
          });
          console.log(this.state.jobList);
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

    checkDate = (adminId) => {
        let dateChecked = false;
        // console.log(this.state.jobDate.startDate);
        // console.log(this.state.jobDate.endDate);
        
        // console.log(this.state.jobList);
        
        this.state.jobList.map( (job)=>{
            if ( job.worker != null && job.worker._id == adminId){
                if  ((job.startDate <= this.state.jobDate.startDate && job.endDate >= this.state.jobDate.startDate) || (job.startDate <= this.state.jobDate.endDate && job.endDate >= this.state.jobDate.endDate)){
                    dateChecked = true;
                }
            }
        })

        return dateChecked;
    }

    addGuide = async(adminId) => {
        console.log(this.checkDate(adminId));
        if(this.checkDate(adminId) == false){
            await this.setState({
                assignInfo:{
                    ...this.state.assignInfo,
                    adminId: adminId
                }
            });
            console.log(this.state.assignInfo.adminId);
            
            await this.assignInfoSubmit();
            window.location.href = `/job-detail/${this.props.id}`;
        }else{
            window.alert('nhân viên bị trùng lịch');
        }
        
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
