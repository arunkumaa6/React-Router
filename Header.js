import React from 'react'
import './App.scss';
// import React, { Component } from 'react'

function Header() {
    return (
      <div>
        <div className='container'>
      <div className='link'>  
      <a href='' className='a1'>Home</a>
      <a href='' className='a2'>logo</a>
      <a href='' className='a3'>cart</a>
      <a href='' className='a4'>P</a>
      </div>
      </div>
      </div>
    )
  }

// export default class Header extends Component {
//     constructor(){
//       alert('constructor')
//         super();
//         this.state={
//             value:'Welcome', name: 'Guys'
//         }
//     }

//     componentWillMount(){
//         alert('learn reactjs');
//     }

//     componentDidMount(){
//       setInterval(()=>{
//         this.setState({value:'NISHA DEVI'})
//       },1000);
//     }

//     componentDidUpdate(){
//       alert('component did mount')
//     }
//   render() {
//     alert('Rendering');
//     return (
//       <>
//         <h1>
//             {this.state.value} {this.state.name}
//         </h1>
//       </>
//     )
//   }
// }


// export default Header
// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (
//       <div>{this.props.age}</div>
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (
//       <div>Header
//         <button onClick={()=>this.props.get({name:"react js"})}>click</button>
//       </div>
//     )
//   }
// }


// import React from 'react'

// function Header(props) {
//   return (
//     <div>Header {props.obj.name}
//     <button onClick={()=>props.get({name:'arunkumar'})}>click</button>
//     </div>
//   )
// }

export default Header