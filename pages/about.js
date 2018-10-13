import React, { Component } from "react";
import Link from "next/link";
import Head from "../components/head";
import NextHead from 'next/head'
import Nav from "../components/nav";
import { Button } from "antd-mobile";
import dynamic from 'next/dynamic'

class About extends Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    console.log("not in client")
    return { userAgent }
  }
  // constructor(props) {
  //   super(props);
  // }
  loadMap(){
    setTimeout(() => {
      if(!this.map){
        if (window.Microsoft){
          this.map = new window.Microsoft.Maps.Map(document.getElementById('myMap'), {});
        }else{
          this.loadMap()
        }
      }
    }, 100);
  }
  componentDidMount() {
      console.log(window.Microsoft)
      
      this.loadMap()
  }

  render() {
    return (
      <div>
        <Head />
        <NextHead>
          <script type='text/javascript' src='https://cn.bing.com/api/maps/mapcontrol?key=AkWd1qtjvaQG5PSU3aZoLXezrdZ5HKSupOIJGOJ5yfmTg242ic4XAJdEqfJWLiXt'></script>
        </NextHead>
        <Button type="warning">about</Button>
        <div id="myMap" style={{width:'100vw', height:'100vh'}} />
      </div>
    );
  }
}

export default About;
