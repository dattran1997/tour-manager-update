import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import '../css/AdminManager.css';
import '../css/graph3d.css';
import Slide from '../images/slide.jpg';

export default class AdminManager extends Component {
  state = {
    adminInfo: {
      username:"",
      password:"",
      role:"admin",
    },
    tourInfo:{
      title:'',
      description:'',
      detail:'',
      price:'',
      duration:'',
      image:'',
      kind:'local',
    },
    customerGraph:{
      single:0,
      couple:0,
      family:0,
    },
    tourGraph:{
      localTour:0,
      foreignTour:0,
      localTourBook:0,
      foreignTourBook:0,
    },
    adminList:[],
    tourList:[],
    jobList:[],
  }

  async componentDidMount(){
    await this.getAllAdmin();
    await this.getAllTour();
    await this.getAllJob();
    this.countGraph();
  }

  countGraph = () =>{
    const customerCount = this.state.jobList.map((job) =>{
      if(job.touristNumber == 1){
        this.setState({
          customerGraph:{
            ...this.state.customerGraph,
            single: this.state.customerGraph.single + 1,
          }
        });
      }else if(job.touristNumber == 2){
        this.setState({
          customerGraph:{
            ...this.state.customerGraph,
            couple: this.state.customerGraph.couple + 1,
          }
        });
      }else{
        this.setState({
          customerGraph:{
            ...this.state.customerGraph,
            family: this.state.customerGraph.family + 1,
          }
        });
      }
    });
    const tourCount = this.state.tourList.map((tour) =>{
      if(tour.kind == 'local'){
        this.setState({
          tourGraph:{
            ...this.state.tourGraph,
            localTour: this.state.tourGraph.localTour + 1,
          }
        });
      }else{
        this.setState({
          tourGraph:{
            ...this.state.tourGraph,
            foreignTour: this.state.tourGraph.foreignTour + 1,
          }
        });
      }
    });
    const tourBookCount = this.state.jobList.map((job) =>{
      if(job.tour.kind == 'local'){
        this.setState({
          tourGraph:{
            ...this.state.tourGraph,
            localTourBook: this.state.tourGraph.localTourBook + 1,
          }
        });
      }else{
        this.setState({
          tourGraph:{
            ...this.state.tourGraph,
            foreignTourBook: this.state.tourGraph.foreignTourBook + 1,
          }
        });
      }
    });
    console.log('count');
  }

  adminInfoChange = (newAdminInfo)=>{
    this.setState({
      adminInfo:{
        ...this.state.adminInfo,
        ...newAdminInfo
      }
    });
  }

  adminSubmit = async (event) =>{
    event.preventDefault();
    console.log(this.state.adminInfo);

    if(!this.state.adminInfo.username || !this.state.adminInfo.password){
      window.alert('please dont leave any field blank');
    }else{
      const result = await fetch(`http://localhost:9999/api/user`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state.adminInfo)
      }).then((res)=> res.json());
      console.log(result)

      if(result.success == false){
        window.alert(result.message);
      }else{
        window.alert('create user successful');
        this.getAllAdmin();
      }
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

  deleteAdmin = async (adminId) => {
    console.log('delete');
    console.log(adminId);
    const result = await fetch(`http://localhost:9999/api/user/delete/${adminId}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state.adminInfo)
    }).then((res)=> res.json());
    if(!result.success){
      window.alert(result.message);
    }else{
      window.alert('user deleted');
      this.getAllAdmin();
    }
  }

  adminUpdate= (adminID) =>{
    window.location.href = `/admin-update/${adminID}`;
  }

  tourSubmit = async(event) =>{
    event.preventDefault();
    const result = await fetch(`http://localhost:9999/api/tour`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state.tourInfo)
    }).then((res)=> res.json());
    if(!result.success){
      window.alert(result.message);
    }else{
      this.getAllTour();
    }
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

  deleteTour = async (adminId) => {
    const result = await fetch(`http://localhost:9999/api/tour/delete/${adminId}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state.adminInfo)
    }).then((res)=> res.json());
    if(!result.success){
      window.alert(result.message);
    }else{
      window.alert('tour deleted');
      this.getAllTour();
    }
  }

  tourUpdate= (adminID) => {
    window.location.href = `/tour-update/${adminID}`;
  }

  tourInfoChange = (newTourInfo) =>{
    this.setState({
      tourInfo:{
        ...this.state.tourInfo,
        ...newTourInfo
      }
    });
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

  addTourGuide = (jobId) =>{
    window.location.href = `/add-tour-guide/${jobId}`;
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div class="background">
              <img src={Slide} alt=""/>
          </div>
          <div class="adminmanage-bound">
            <div class="adminmanage-in">
              <section className='option'>
              <ul>
                { window.localStorage.role == 'super-admin' ? (
                  <>
                    <li>
                      <a href='/admin-manager/admin'>admin manager</a>
                    </li>
                    <li>
                      <a href='/admin-manager/job'>job manager</a>
                    </li>
                    <li>
                      <a href='/admin-manager/tour'>tour manager</a>
                    </li>
                    <li>
                      <a href='/admin-manager/customer-graph'>customer graph</a>
                    </li>
                    <li>
                      <a href='/admin-manager/tour-graph'>tour graph</a>
                    </li>
                  </>
                ) : (
                  <li>
                    <a href='/admin-manager/work-list'>work list</a>
                  </li>
                )}
              </ul>
            </section>
            <section className='managing-area'>
              <Route path="/admin-manager/admin" component={this.admin} />
              <Route path="/admin-manager/job" component={this.job} />
              <Route path="/admin-manager/tour" component={this.tour} />
              <Route path="/admin-manager/customer-graph" component={this.customerGraphManager} />
              <Route path="/admin-manager/tour-graph" component={this.tourGraphManager} />
              <Route path="/admin-manager/work-list" component={this.work} />
            </section>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }

  admin = () =>{
    return(
      <section className='admin-manager-container'>
        <form className='add-admin-form' onSubmit={this.adminSubmit}>
          <div class="add-admin-bound">
            <input placeholder='username' onChange={(e) => this.adminInfoChange({username:e.target.value})} />
            <input placeholder='password' onChange={(e) => this.adminInfoChange({password:e.target.value})} />
            <button type='submit'>add admin</button>
          </div>
        </form>
        <section className='admin-container'>
          <div class="admin-bound">
                {this.state.adminList.map((admin) => {
                  if(admin.role != "super-admin"){
                    return(
                        <div class="admin-item"  key={admin._id}>
                          <div class="left nameadmin">{admin.username}</div>
                          <button onClick={() => {this.adminUpdate(admin._id)}} class="right">edit</button>
                          <button onClick={() => {this.deleteAdmin(admin._id)}} class="right">delete</button>
                        </div>
                    )
                  }else{
                    return(
                        <div class="admin-item" key={admin._id}>
                            <div class="left nameadmin">{admin.username}</div>
                            <button onClick={() => {this.adminUpdate(admin._id)}} class="right">edit</button>
                        </div>
                    )
                  }
                })}
          </div>
          
        </section>
      </section>
    );
  }

  tour = () =>{
    return(
      <section className='tour-manger-container'>
        <form className='add-tour-form' onSubmit={this.tourSubmit}>
          <input placeholder='Title' onChange={(e) => this.tourInfoChange({title:e.target.value})}/>
          <input placeholder='Description' onChange={(e) => this.tourInfoChange({description:e.target.value})} />
          <input placeholder='Detail' onChange={(e) => this.tourInfoChange({detail:e.target.value})} />
          <input placeholder='Price' onChange={(e) => this.tourInfoChange({price:e.target.value})} />
          <input placeholder='Duration by day' onChange={(e) => this.tourInfoChange({duration:e.target.value})} />
          <input placeholder='Image' onChange={(e) => this.tourInfoChange({image:e.target.value})} />
          <select onChange={(e) => this.tourInfoChange({kind:e.target.value})} value={this.state.tourInfo.kind}>
            <option value='local'>local</option>
            <option value='foreign'>foreign</option>
          </select>
          <button type='submit'>add tour</button>
        </form>
        <section className='tour-container'>
          <div class="tour-bound">
            {this.state.tourList.map((tour) => 
              <div className='tour-item' key={tour._id}>
                <div class="tourtitle left">{tour.title}</div>
                <div class="tourdescription left">{tour.description}</div>
                <button onClick={() => {this.tourUpdate(tour._id)}} class="right">edit</button>
                <button onClick={() => {this.deleteTour(tour._id)}} class="right">delete</button>
              </div>
            )}
          </div>
        </section>
      </section>
    );
  }

  job = () =>{
    return(
      <section className='job-container'>
        {this.state.jobList.map((job) =>
          <div className='job-item'>
            <a href={'/job-detail/' + job._id}>
              <div class="job jname left">{job.customer.fullname}</div>
              <div class="job left">{job.customer.phone}</div>
              <div class="job left">{job.customer.identifyNumber}</div>
              <div class="job left">{job.tour.title}</div>
            </a>
            <button onClick={() => {this.addTourGuide(job._id)}} >Add tour guide</button>
          </div>
        )}
      </section>
    );
  }

  customerGraphManager = () =>{
    var count = this.state.customerGraph.single + this.state.customerGraph.couple + this.state.customerGraph.family;
    var fam =  Math.round( this.state.customerGraph.family * 100 / count );
    var cou = Math.round( this.state.customerGraph.couple * 100 / count );
    var sin = Math.round( this.state.customerGraph.single * 100 / count );
    var famList=[];
    var couList=[];
    var sinList=[];
    
    for(let i = 0; i < fam-1;i++){
      famList.push("<div className=\"bar1\"></div>");
    }
    for(let i = 0; i < cou-1;i++){
      couList.push("<div className=\"bar2\"></div>");
    }
    for(let i = 0; i < sin-1;i++){
      sinList.push("<div className=\"bar3\"></div>");
    }
    
    return(
      <section className='customer-graph-container'>
        <h2>single: {this.state.customerGraph.single} = {fam} %</h2>
        <h2>couple: {this.state.customerGraph.couple} = {cou} %</h2>
        <h2>family: {this.state.customerGraph.family} = {sin} %</h2>
        {/* {this.state.customerGraph.family + this.state.customerGraph.family}  */}
        
      <div class="wrapper">
        <div class="progressbar-wrapper">
              <div class="progressbar">
                  <div class="side front">
                      {/* <div class="bar1"></div> */}
                      {famList.map((fam) =>
                        <div className="bar1"></div>
                      )}
                      {couList.map((cou) =>
                        <div className="bar2"></div>
                      )}
                      {sinList.map((sin) =>
                        <div className="bar3"></div>
                      )}
                  </div>
                  <div class="side back">
                      {/* <div class="bar1"></div> */}
                      {famList.map((fam) =>
                        <div className="bar1"></div>
                      )}
                      {couList.map((cou) =>
                        <div className="bar2"></div>
                      )}
                      {sinList.map((sin) =>
                        <div className="bar3"></div>
                      )}
                  </div>
                  <div class="side top">
                      {/* <div class="bar1"></div> */}
                      {famList.map((fam) =>
                        <div className="bar1"></div>
                      )}
                      {couList.map((cou) =>
                        <div className="bar2"></div>
                      )}
                      {sinList.map((sin) =>
                        <div className="bar3"></div>
                      )}
                  </div>
                  <div class="side bottom">
                      {/* <div class="bar1"></div> */}
                      {famList.map((fam) =>
                        <div className="bar1"></div>
                      )}
                      {couList.map((cou) =>
                        <div className="bar2"></div>
                      )}
                      {sinList.map((sin) =>
                        <div className="bar3"></div>
                      )}
                  </div>
                  <div class="side left"></div>
              </div>
        </div>
      </div>

        </section>
    );
  }

  tourGraphManager = () =>{
    return(
      <section className='tour-graph-container'>
        <h2>localTour: {this.state.tourGraph.localTour}</h2>
        <h2>foreignTour: {this.state.tourGraph.foreignTour}</h2>
        <h2>localBookTour: {this.state.tourGraph.localTourBook}</h2>
        <h2>foreignTourBook: {this.state.tourGraph.foreignTourBook}</h2>
      </section>
    );
  }

  work = () =>{
    return(
      <section className='work-container'>
        {this.state.jobList.map((job) =>{
          if(job.worker != null && job.worker._id == window.localStorage.userId){
            return(
              <div className='work-item'>
                <a href={'/work-detail/' + job._id}>
                  <h3>{job.customer.fullname}</h3>
                  <p>{job.customer.phone}</p>
                  <p>{job.customer.identifyNumber}</p>
                  <p>{job.tour.title}</p>
                </a>
              </div>
            );
          }
        })}
      </section>
    );
  }

}
