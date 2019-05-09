import React, { Component } from 'react';
import '../css/MainPage.css';
import Slide from '../images/slide.jpg';
import Pic1 from '../images/slide1.jpg';
import NavBar from './NavBar';


export default class MainPage extends Component {
  state ={
    tourList:[],
  }

  componentDidMount(){
    this.getAllTour();
  }
  
  getAllTour = async () => {
    const result = await fetch(`http://localhost:9999/api/tour`,{
      method:'GET',
    }).then((res)=> res.json());
    if(!result.success){
      window.alert(result.message);
    }else{
      this.setState({
        tourList: result.allTour,
      });
      console.log(this.state.tourList);
    }
  
  }


  render() {
    return (
      <section className='body'>
        <NavBar />
        <header className='masthead'>

        </header>
        <section className='body-about'>
          <div className='container text-center'>
            <h2> WHY CHOOSE US!</h2>
            <div className='body-about-info row'>
              <div className='col-lg-4'>
                <i className="far fa-compass"></i>
                <h3>ADVENTURE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat urna a vehicula bibendum, cras erat ipsum.</p>
              </div>
              <div className='col-lg-4'>
                <i className="far fa-compass"></i>
                <h3>FUN & SAFETY</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat urna a vehicula bibendum, cras erat ipsum.</p>
              </div>
              <div className='col-lg-4'>
                <i className="far fa-flag"></i>
                <h3>IMPECCABLE SERVICE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat urna a vehicula bibendum, cras erat ipsum.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='Body-Video text-left'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <img className='pt-lg-4' src={Slide} style={{width:'93%', maxHeight:'302px'}}/>
              </div>
              <div className='col-lg-6'>
                <h2>VIDEO OF ZONE TOUR</h2>
                <span>Proin commodo, elit in iaculis laoreet.</span>
                <p>Fusce lobortis elit est, aliquam pulvinar ex vestibulum ut. Etiam tincidunt tempor massa, sed consectetur eros rutrum et. Nunc sit amet faucibus justo. Cras interdum velit vitae lectus imperdiet, vitae egestas neque accumsan. Sed sed turpis nulla. Phasellus a volutpat ipsum, vitae rhoncus lorem.</p>
                <a href='#'>READ MORE</a>
              </div>
            </div>
          </div>
        </section>
        <section className='Body-NewTour'>
          <div className='container'>
            <h2 className='text-left mb-5'>NEW TOUR</h2>
            <div className='row tour-row'>
              {this.state.tourList.map((tour) =>
                <li className="Body-NewTour-In-Item" key={tour._id}>
                  <div className="Body-NewTour-In-Item-Booking">
                    <div className="Body-NewTour-In-Item-Booking-In">
                      <a href={"/booking/" + tour._id}>
                        BOOK NOW
                      </a>
                    </div>
                  </div>
                  <img src={Pic1} />
                  <h3>{tour.title}</h3>
                  <ul className="rating">
                    <li className="rating-Item"><span className="fa fa-star gold"></span></li>
                    <li className="rating-Item"><span className="fa fa-star gold"></span></li>
                    <li className="rating-Item"><span className="fa fa-star gold"></span></li>
                    <li className="rating-Item"><span className="fa fa-star gold"></span></li>
                    <li className="rating-Item"><span className="fa fa-star white"></span></li>
                  </ul>
                  <p>Duration: {tour.duration} Day(s)</p>
                </li>
              )}
              
            </div>
          </div>
        </section>

      </section>
    )
  }
}
