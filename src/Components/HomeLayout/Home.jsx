import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Intro from './Intro'

export default class Home extends Component {
  render() {
    return (
      <div className=''>
        <Header></Header>
        <Carousel></Carousel>
        <Intro></Intro>
      </div>
    )
  }
}
