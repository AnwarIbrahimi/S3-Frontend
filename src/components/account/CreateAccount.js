import React, { Component } from 'react'
import AccountService from '../../services/AccountService';
import './createaccount.scss';


class CreateAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2           
            firstName: "",
            lastName: "",
            emailId: "",
            password: ""
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateaccount = this.saveOrUpdateaccount.bind(this);
    }

    // step 3
    // componentDidMount(){

    //     // step 4
    //     if(this.state.id === '_add'){
    //         return
    //     }else{
    //         AccountService.getaccountById(this.state.id).then( (res) =>{
    //             let account = res.data;
    //             this.setState({firstName: account.firstName,
    //                 lastName: account.lastName,
    //                 emailId : account.emailId
    //             });
    //         });
    //     }        
    // }
    saveOrUpdateaccount = (e) => {
        e.preventDefault();
        let account = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('account => ' + JSON.stringify(account));

        // step 5
        // if(this.state.id === '_add'){
            AccountService.createAccount(account).then(res =>{
                this.props.history.push('/accounts');
            });
        // }else{
        //     AccountService.updateaccount(account, this.state.id).then( res => {
        //         this.props.history.push('/accounts');
        //     });
        // }
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

    // getTitle(){
    //     if(this.state.id === '_add'){
    //         return <h3 className="text-center">Add account</h3>
    //     }else{
    //         return <h3 className="text-center">Update account</h3>
    //     }
    // }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "createaccount">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {/* {
                                    this.getTitle()
                                } */}
                                <div className = "card-body" >
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
                                        <br/>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateaccount}>Save</button>
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

export default CreateAccount