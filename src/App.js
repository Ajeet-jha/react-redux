import React, {Component} from 'react'
import {connect} from 'react-redux'
class App extends Component{
  // constructor(){
  //   super()
  //   this.state ={
  //     count : 0
  //   }
  // }
  // inc = () => {
  //   let count = this.state.count;
  //   count++
  //  this.setState({
  //    count 
  //  })
  // }
  // dec = () => {
  //   let count = this.state.count;
  //   count--
  //   this.setState({
  //     count
  //   })
  // }
  render(){
    return(
      <div style={{margin:"auto",textAlign:"center"}}>
       <button onClick={this.props.inc}>+</button>
      {this.props.count}
       <button onClick={this.props.dec}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    count : state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    inc : () => dispatch({type:"INC_NUM"}),
    dec : () => dispatch({type:"DEC_NUM"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)