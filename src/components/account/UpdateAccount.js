import React, { Component } from 'react'
import AccountService from '../../services/AccountService';
import { useParams } from 'react-router-dom';
import './createaccount.scss';

export const withParams = Component => props => {
    let params = useParams();
    return <Component {...props} params={params} />;
}

class UpdateAccount extends Component {
    constructor(props) {
        super(props)
        let{id} = props.params;
        this.state = {
            id: id,
            firstName: "",
            lastName: "",
            emailId: "",
            password: ""
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateAccount = this.updateAccount.bind(this);

    }

    componentDidMount(){
        AccountService.getAccountById(this.state.id).then( (res) =>{
            let account = res.data;
            this.setState({firstName: account.firstName,
                lastName: account.lastName,
                emailId : account.emailId
            });
        });
    }

    updateAccount = (e) => {
        e.preventDefault();
        let account = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('account => ' + JSON.stringify(account));
        // console.log('id => ' + JSON.stringify(this.state.id));
        AccountService.updateAccount( this.state.id, account)
        // .then( res => {
        //     this.props.history.push('/accounts');
        // });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    cancel(){
        this.props.history.push('/accounts');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "createaccount">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update account</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateAccount}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default withParams(UpdateAccount);