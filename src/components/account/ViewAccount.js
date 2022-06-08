import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import AccountService from '../../services/AccountService'

export const withParams = Component => props => {
    let params = useParams();
    return <Component {...props} params={params} />;
}

class ViewAccount extends Component {
    constructor(props) {
        super(props)
        let{id} = props.params;
        this.state = {
            id: id,
            account: {}
        }
    }

    componentDidMount(){
        AccountService.getaccountById(this.state.id).then( res => {
            this.setState({account: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View account Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> account First Name: </label>
                            <div> { this.state.account.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> account Last Name: </label>
                            <div> { this.state.account.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> account Email ID: </label>
                            <div> { this.state.account.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withParams(ViewAccount);