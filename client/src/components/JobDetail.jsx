import React, { Component } from 'react'

export default class JobDetail extends Component {
    state={
        jobInfo:{
            customer:'',
            tour:'',
            worker:null,
        },
        assignInfo:{
            jobId: this.props.id,
            adminId:null,
        },

    }

    componentDidMount(){
        this.getJobInfo();
    }
    
    getJobInfo = async () => {
        const result = await fetch(`http://localhost:9999/api/job/${this.props.id}`,{
            method:'GET',
        }).then((res)=> res.json());
        if (!result.success){
            window.alert(result.message);
        }else{
            await this.setState({
                jobInfo:result.job,
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

    addTourGuide = (jobId) =>{
        window.location.href = `/add-tour-guide/${jobId}`;
    }

    deleteGuide = async() => {
        await this.setState({
            jobInfo:{
                ...this.state.jobInfo,
                worker: null
            }
        });
        console.log(this.state.assignInfo.adminId);
        this.assignInfoSubmit();
    }

  render() {
    return (
      <section className='job-detail'>
        <h2>tour info</h2>
        <p>tour {this.state.jobInfo.tour.title}</p>
        <p>price {this.state.jobInfo.tour.price}</p>
        <p>duration {this.state.jobInfo.tour.duration}</p>
        <p>tourist number {this.state.jobInfo.touristNumber}</p>
        <p>start date {this.state.jobInfo.startDate}</p>
        <p>end date {this.state.jobInfo.endDate}</p>
        <p>checked: {JSON.stringify(this.state.jobInfo.checked)}</p>
        <h2>tourist info</h2>
        <p>name: {this.state.jobInfo.customer.fullname}</p>
        <p>phone: {this.state.jobInfo.customer.phone}</p>
        <p>tourist number: {this.state.jobInfo.customer.identifyNumber}</p>
        <h2>worker info</h2>
        {this.state.jobInfo.worker != null ? (
            <>
                <p>{this.state.jobInfo.worker.username}</p>
                <button onClick={() => {this.deleteGuide()}} >delete Guide</button>
            </>
        ) : (
            <>
                <p>Chưa có</p>
                <button onClick={() => {this.addTourGuide(this.props.id)}} >Add tour guide</button>
            </>
        )}
        
      </section>
    )
  }
}
