import React from 'react';
import qs from "querystring";
import ProxyDemo from "./ProxyDemo";

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      banners:[]
    }
  }

  componentDidMount(){
    fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
    .then(res => res.json())
    .then(data => {
      this.setState({
        banners:data.banner
      })
    })

    fetch("http://iwenwiki.com/api/blueberrypai/login.php",{
      method:"POST",
      headers:{
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept":"application/json,text/plain,*/*"
      },
      body:qs.stringify({
        user_id:"iwen@qq.com",
        password:"iwen123",
        verification_code:"crfvw"
      })
      // body:"user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"
    }).then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }


  render(){
    const {banners} = this.state;
    return (
      <div>
        {
          banners.length > 0 ?
          <ul>
            {
              banners.map((element, index) => {
                return <li key={index}>{element.title}</li>
              })
            }
          </ul>
          :
          <div>等待..........</div>
        }
        <ProxyDemo />
      </div>
    );
  }
}
