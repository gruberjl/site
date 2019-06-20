import React from 'react'
import {store} from '../store'

export const connect = (WrappedComponent, storeName) => {
  return class Connect extends React.Component {
    constructor() {
      super()
      this.state = {}
      Object.keys(store[storeName].events).forEach(event => {
        this.state[event] = store[storeName][event]
      })
    }

    componentDidMount() {
      Object.keys(store[storeName].events).forEach(event => {
        store[storeName].on(store[storeName].events[event], this.onEvent(event))
      })
    }

    componentWillUnmount() {
      Object.keys(store[storeName].events).forEach(event => {
        store[storeName].removeListener(store[storeName].events[event], this.onEvent(event))
      })
    }

    onEvent = (event) => (data) => {
      this.setState({[event]: data})
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} {...store[storeName].functions} />
    }
  }
}
