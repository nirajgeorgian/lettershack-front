import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// class PrivateRoute extends Component {
//   render() {
//     let { Component: component, ...rest } = this.props
//     delete rest.component
//     return (
//       <Route { ...rest } render = {(props) => {
//         return (
//           this.props.isAutenticated === true
//             ? <Component { ...props } />
//             : <Redirect push to='/login' />
//           )
//       }}
//       />
//     )
//   }
// }

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render = { props => {
    return (
      rest.isAutenticated === true
      ? <Component { ...props } />
      : <Redirect to = {
          {
            pathname: '/account/login',
            state: { from: props.location }
          }
        }
      />
    )
  }}/>
)

function mapStateToProps(state) {
  return {
    isAutenticated: state.login.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps, null)(PrivateRoute))
