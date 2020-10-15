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
       <hr />
       <p>History</p>
       <ul>
       {
         this.props.history.map(data => {
         return (<li key={data.id} className="list" onClick={() => this.props.del_list(data.id)}>{data.count}</li>)
         })
       }
       </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    count : state.count,
    history : state.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    inc : () => dispatch({type:"INC_NUM", val: 5}),
    dec : () => dispatch({type:"DEC_NUM", val: 5}),
    del_list : (key) => dispatch({type:"DEL_NUM", val : key})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)