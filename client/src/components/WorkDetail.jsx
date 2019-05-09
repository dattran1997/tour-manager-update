import React, { Component } from 'react'

export default class WorkDetail extends Component {
    state={
        jobInfo:{
            customer:'',
            tour:'',
            worker:null,
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

  render() {
    return (
      <section className='work-detail'>
        {this.props.id}
        <h2>tour info</h2>
        <p>tour: {this.state.jobInfo.tour.title}</p>
        <p>price: {this.state.jobInfo.tour.price}</p>
        <p>duration: {this.state.jobInfo.tour.duration}</p>
        <p>tourist number: {this.state.jobInfo.touristNumber}</p>
        <p>start date: {this.state.jobInfo.startDate}</p>
        <p>end date:  {this.state.jobInfo.endDate}</p>
        <p>checked: {JSON.stringify(this.state.jobInfo.checked)}</p>
        <h2>tourist info</h2>
        <p>name: {this.state.jobInfo.customer.fullname}</p>
        <p>phone: {this.state.jobInfo.customer.phone}</p>
        <p>identifyNumber: {this.state.jobInfo.customer.identifyNumber}</p>
      </section>
    )
  }
}
