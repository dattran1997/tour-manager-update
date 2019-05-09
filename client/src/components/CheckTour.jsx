import React, { Component } from 'react';
import Slide from '../images/slide.jpg';

export default class CheckTour extends Component {

    componentDidMount(){
        this.checkJob();
    }

    checkJob = async() =>{
        const result = await fetch(`http://localhost:9999/api/job/checked/${this.props.id}`,{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify()
        }).then((res)=> res.json());
        if(!result.success){
            window.alert(result.message);
        }else{
            window.alert('checked');
        }
    }

  render() {
    return (
      <div>
        <div class="background">
              <img src={Slide} alt=""/>
        </div>
        <div class="update">
          <div class="update-bound">
            <h1>Xác nhận thành công! bên công ty sẽ liên hệ lại với bạn sớm nhất có thể</h1>
            <h3>Chúc bạn có một chuyến đi vui vẻ!</h3>
          </div>
        </div>
      </div>
    )
  }
}
