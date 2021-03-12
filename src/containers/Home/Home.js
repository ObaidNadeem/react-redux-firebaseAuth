import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { facebook_login, set_data } from '../../store/action'


class Home extends Component {
    
    render() {
        console.log(this.props)
        return(
            <div>
                {/* <button onClick = {() => this.props.set_data()}>SET DATA</button> */}
                <button onClick = {() => this.props.facebook_login()}>Facebook Login</button>
                {/* <input type="file"></input> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
})

const mapDispatchToProps = (dispatch) => ({
    set_data: () => dispatch(set_data()),
    facebook_login: () =>dispatch(facebook_login()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

