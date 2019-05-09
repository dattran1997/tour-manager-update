import React, { Component } from 'react'
import '../css/tourUpdate.css';
import Slide from '../images/slide.jpg';

export default class TourUpdate extends Component {
    state={
        tourInfo:{
            title:'',
            description:'',
            detail:'',
            price:'',
            duration:'',
            image:'',
            kind:'local',
        },
    }

    componentDidMount(){
        this.getTourInfo();
    }

    getTourInfo = async () => {
        const result = await fetch(`http://localhost:9999/api/tour/${this.props.id}`,{
            method:'GET'
        }).then((res)=> res.json());
        if(!result.success){
            window.alert(result.message);
        }else{
            this.setState({
                tourInfo:{
                    ...this.state.tourInfo,
                    ...result.tour,
                }
            });
        }
    }

    tourInfoChange = (newTourInfo) => {
        this.setState({
            tourInfo:{
                ...this.state.tourInfo,
                ...newTourInfo
            }
        });
    }

    tourInfoSubmit = async (e) => {
        e.preventDefault();
        const result = await fetch(`http://localhost:9999/api/tour/edit/${this.props.id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state.tourInfo)
        }).then((res)=> res.json());
        if(!result.success){
            window.alert(result.message);
        }else{
            window.alert('tour updated');
            window.location.href = `/admin-manager/${window.localStorage.userId}`;
        }
    }



  render() {
    return (
        <form className='add-tour-form' onSubmit={this.tourInfoSubmit}>
           
                <div class="background">
                    <img src={Slide} alt=""/>
                </div>
                <div class="update">
                    <div class="update-bound">
                        <div class="update-title">
                            Tour Update
                        </div>
                        <ul>
                            <li>
                                <input value={this.state.tourInfo.title} placeholder='Title' onChange={(e) => this.tourInfoChange({title:e.target.value})}/>
                            </li>
                            <li>
                                <input value={this.state.tourInfo.description} placeholder='Description' onChange={(e) => this.tourInfoChange({description:e.target.value})} />
                            </li>
                            <li>
                                <input value={this.state.tourInfo.detail} placeholder='Detail' onChange={(e) => this.tourInfoChange({detail:e.target.value})} />
                            
                            </li>
                            <li>
                                <input value={this.state.tourInfo.price} placeholder='Price' onChange={(e) => this.tourInfoChange({price:e.target.value})} />
                            
                            </li>
                            <li>
                                <input value={this.state.tourInfo.duration} placeholder='Duration by day' onChange={(e) => this.tourInfoChange({duration:e.target.value})} />
                            
                            </li>
                            <li>
                                <input value={this.state.tourInfo.image} placeholder='Image' onChange={(e) => this.tourInfoChange({image:e.target.value})} />
                            </li>
                            <li>
                                <select onChange={(e) => this.tourInfoChange({kind:e.target.value})} value={this.state.tourInfo.kind}>
                                    <option value='local'>local</option>
                                    <option value='foreign'>foreign</option>
                                </select>
                                <button type='submit' class="update-button">update</button>
                            </li>
                        </ul>
                    </div>
                </div>
        </form>
    )
  }
}
