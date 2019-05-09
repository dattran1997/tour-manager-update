import React, { Component } from 'react';
import '../css/NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg fixed-top text-white" style={{backgroundColor:'rgba(0, 0, 0, .3)'}}>
                <div className='container'>
                    <a className='navbar-brand'>Brand</a>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Trang Chủ</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Tour Mới</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Lịch Khởi Hành</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Du Lịch</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Khách Sạn</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Máy Bay</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Dịch Vụ</a>
                        </li>
                    </ul>
                    <div className="Header-Nav-Nav-Call">
                        <i className="fas fa-phone"></i>
                    </div>
                </div>
            </nav>
	    </div>
    )
  }
}
