import React, { Component } from 'react';
import '../css/jobdetail.css';
import Slide from '../images/slide.jpg';

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
      const startDate = new Date(this.state.jobInfo.startDate) 
      const endDate = new Date(this.state.jobInfo.endDate) 
      const startDateForm = startDate.getDate() +"/"+ parseInt(startDate.getMonth() + 1) +"/"+ startDate.getFullYear();
      const endDateForm = endDate.getDate() +"/"+ parseInt(endDate.getMonth() + 1) +"/"+ endDate.getFullYear();

    return (
      <section className='job-detail'>
      <div class="background">
            <img src={Slide} alt=""/>
        </div>
                <div className="detail-bound">
                    <div className="detail-item">tour: {this.state.jobInfo.tour.title}</div>
                    <div className="detail-item">price: {this.state.jobInfo.tour.price}</div>
                    <div className="detail-item">duration: {this.state.jobInfo.tour.duration}</div>
                    <div className="detail-item">tourist number: {this.state.jobInfo.touristNumber}</div>
                    <div className="detail-item">start date: {startDateForm}</div>
                    <div className="detail-item">end date: {endDateForm}</div>
                    <div className="detail-item">checked: {JSON.stringify(this.state.jobInfo.checked)}</div>
                    
                    <div className="detail-item titledetail">tourist info</div>
                    <div className="detail-item">name: {this.state.jobInfo.customer.fullname}</div>
                    <div className="detail-item">phone: {this.state.jobInfo.customer.phone}</div>
                    <div className="detail-item">tourist number: {this.state.jobInfo.customer.identifyNumber}</div>

                    <div className="detail-item titledetail">worker info</div>
                    {this.state.jobInfo.worker != null ? (
                        <>
                            <div className="detail-item namedetail">{this.state.jobInfo.worker.username}</div>
                            <button onClick={() => {this.deleteGuide()}} >delete Guide</button>
                        </>
                    ) : (
                        <>
                            <div className="detail-item namedetail">Chưa có</div>
                            <button onClick={() => {this.addTourGuide(this.props.id)}} >Add tour guide</button>
                        </>
                    )}
                </div>
                    
        {/* <h2>tour info</h2> */}
        
        
      </section>
    )
  }
}
