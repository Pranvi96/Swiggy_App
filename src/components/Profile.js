import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    render() {
        return (
            <h1>Hello Profile</h1>
        )
    }
}

export default Profile
