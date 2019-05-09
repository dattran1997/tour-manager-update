import React, { Component } from 'react';
import '../css/Booking.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Booking extends Component {
    state={
        bookInfo:{
            touristInfo:{
                fullname:'',
                address:'',
                email:'',
                phone:'',
                identifyNumber:'',
            },
            tourId: this.props.id,
            touristNumber:'',
            startDate: new Date(),
            endDate:new Date(),
        },
        tourInfo:{},
    }

    componentDidMount(){
        this.getTourInfo();
    }

    getTourInfo = async() => {
        const result = await fetch(`http://localhost:9999/api/tour/${this.props.id}`,{
            method:'GET',
        }).then((res)=> res.json());
        if(!result.success){
            window.alert(result.message);
        }else{
            this.setState({
                tourInfo: result.tour,
            });
            console.log(this.state.tourInfo);
            this.endDateInfoCalculate();
        }
    }

    bookInfoSubmit = async(e) => {
        e.preventDefault();
        const result = await fetch(`http://localhost:9999/api/job/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state.bookInfo)
        }).then((res)=> res.json());
        if(!result.success){
            window.alert(result.message);
        }else{
            const sendEmail = await fetch(`http://localhost:9999/api/auth/mail`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    jobId: result.jobId,
                    customerEmail: this.state.bookInfo.touristInfo.email,
                })
            }).then((res)=> res.json());
            if(!sendEmail.success){
                window.alert(sendEmail.message);
            }else{
                window.alert('Cảm ơn bạn đã sử dụng dịch vụ vui lòng check email để xác nhận đặt tour');
            }
            window.alert('book tour successful');
            window.location.href ='/';
        }
    }

    bookInfoChange = (newBookInfo) => {
        this.setState({
            bookInfo:{
                ...this.state.bookInfo,
                ...newBookInfo,
            }
        });
    }

    endDateInfoCalculate = async() =>{
        const startDate = this.state.bookInfo.startDate;
        const endDate = new Date(startDate);
        await endDate.setDate(endDate.getDate() + this.state.tourInfo.duration);
        this.setState({
            bookInfo:{
                ...this.state.bookInfo,
                endDate: endDate,
            }
        });
    }

    startDateInfoChange = async (newDateInfo) =>{
        await this.setState({
            bookInfo:{
                ...this.state.bookInfo,
                startDate: newDateInfo
            }
        });
        this.endDateInfoCalculate();
    }


  render() {
    return (
      <section className='booking'>
        <div className='book-title-border'>
            <h2 className='booking-title'>{this.state.tourInfo.title}</h2>
        </div>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-10'>
                    <div className="card card-container" style={{width:'100%'}}>
                        <div className="card-body">
                            <form className='row' onSubmit={this.bookInfoSubmit}>
                                <div className='col-lg-6 col-left'>
                                    <input className='form-control'placeholder='Họ & Tên' onChange={(e) => {this.bookInfoChange({touristInfo:{...this.state.bookInfo.touristInfo, fullname: e.target.value}})}}/>
                                    <input className='form-control'placeholder='Địa Chỉ' onChange={(e) => {this.bookInfoChange({touristInfo:{...this.state.bookInfo.touristInfo, address: e.target.value}})}}/>
                                    <input className='form-control' type='email' placeholder='Email' onChange={(e) => {this.bookInfoChange({touristInfo:{...this.state.bookInfo.touristInfo,email: e.target.value}})} }/>
                                    <input className='form-control'placeholder='Điện Thoại' onChange={(e) => {this.bookInfoChange({touristInfo:{...this.state.bookInfo.touristInfo, phone: e.target.value}})}}/>
                                </div>
                                <div className='col-lg-6 col-right'>
                                    <div className='block'>
                                        <input className='form-control'placeholder='Số CMND' onChange={(e) => {this.bookInfoChange({touristInfo:{...this.state.bookInfo.touristInfo, identifyNumber: e.target.value}})} }/>
                                    </div>
                                    
                                    <div className='block'>
                                        <input className='form-control' type='number' min='1' placeholder='Số lượng khách' onChange={(e) => {this.bookInfoChange({touristNumber: e.target.value})}}/>
                                    </div>
                                    <div className='block'>
                                        <h6 className='start-date lead'>Start date</h6>
                                        <DatePicker className='form-control' selected={this.state.bookInfo.startDate} onChange={this.startDateInfoChange} dateFormat="dd/MM/yyyy" minDate={new Date()} />
                                    </div>
                                    <div className='block'>
                                        <h6 className='end-date lead'>End date</h6>
                                        <DatePicker className='form-control' selected={this.state.bookInfo.endDate} dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                                <button type='submit' className='book-button btn btn-primary' style={{width:"50%",margin:'auto'}}>Đặt Tour</button>
                            </form>
                            <div className='col-lg-6'>
                            
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
      </section>
    )
  }
}
