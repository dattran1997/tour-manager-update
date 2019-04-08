import React, { Component } from 'react';
import '../css/Booking.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Booking extends Component {
  render() {
    return (
      <section className='booking'>
        <div className='book-title-border'>
            <h2 className='booking-title'>Côn Minh - La Bình - Nguyên Dương</h2>
        </div>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-10'>
                    <div className="card card-container" style={{width:'100%'}}>
                        <div className="card-body">
                            <form className='row'>
                                <div className='col-lg-6 col-left'>
                                    <input className='form-control'placeholder='Họ & Tên'/>
                                    <input className='form-control'placeholder='Địa Chỉ'/>
                                    <input className='form-control'placeholder='Email'/>
                                    <input className='form-control'placeholder='Điện Thoại'/>
                                </div>
                                <div className='col-lg-6 col-right'>
                                    <div className='block'>
                                        <input className='form-control'placeholder='Fax'/>
                                    </div>
                                    
                                    <div className='block'>
                                        <input className='form-control'placeholder=''/>
                                    </div>
                                    <div className='block'>
                                        <h6 className='start-date lead'>Start date</h6>
                                        <DatePicker className='form-control' />
                                    </div>
                                    <div className='block'>
                                        <h6 className='end-date lead'>End date</h6>
                                        <DatePicker className='form-control' />
                                    </div>
                                </div>
                                <button className='book-button btn btn-primary' style={{width:"50%",margin:'auto'}}>Đặt Tour</button>
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
