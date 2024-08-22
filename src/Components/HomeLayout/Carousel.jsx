import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
      <div className=''>
        <div className="container bg-light text-center p-5 mt-5">
            <h1>A warm welcome!</h1>
            <p className='fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button type="button" class="btn btn-primary fs-4">Call to action</button>
        </div>
      </div>
    )
  }
}
