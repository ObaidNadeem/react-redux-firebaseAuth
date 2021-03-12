import { Provider } from "react-redux"
import firebase from '../../config/firebase'

const set_data = () => {
    return (dispatch) => {
        dispatch ({
            type: "SETDATA" , payload: {name: "Obaid", email:"obaid@hotmail.com"}
        })
    }
}

const facebook_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function (result ) {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log("user ====> ", user)

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        })
    }
}

export {
    set_data,
    facebook_login
}