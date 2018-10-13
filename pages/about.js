import React, { Component } from "react";
import Link from "next/link";
import Head from "../components/head";
import NextHead from 'next/head'
import Nav from "../components/nav";
import { Button } from "antd-mobile";
import dynamic from 'next/dynamic'

// const DynamicReactBingmaps = dynamic(import('nextjs-bingmaps'))
const DynamicAxios = dynamic(import('axios'))

class About extends Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    console.log("on in client")
    return { userAgent }
  }
  constructor(props) {
    super(props);
    console.log("both of all")
  }
  componentDidMount() {
    console.log('only in client')
    // this.map = new window.Microsoft.Maps.Map(document.getElementById('myMap'), {});
  }

  render() {
    return (
      <div>
        <Head />
        {/* <DynamicReactBingmaps 
          bingmapKey = "AkWd1qtjvaQG5PSU3aZoLXezrdZ5HKSupOIJGOJ5yfmTg242ic4XAJdEqfJWLiXt" > 
        </DynamicReactBingmaps> */}
        <Button type="warning">about</Button>
        <div id="myMap" style={{width:'100vw', height:'100vh'}} />
      </div>
    );
  }
}

export default About;
