import React, { Component } from 'react'
import AccountService from '../../services/AccountService'
import './accountoverview.scss'

class AccountOverview extends Component {
    constructor(props) {
        super(props)

        this.state = {
                accounts: []
        }
        this.addaccount = this.addaccount.bind(this);
        this.editaccount = this.editaccount.bind(this);
        this.deleteaccount = this.deleteaccount.bind(this);
    }

    deleteaccount(id){
        AccountService.deleteAccount(id).then( res => {
            this.setState({accounts: this.state.accounts.filter(account => account.id !== id)});
        });
    }
    viewaccount(id){
        this.props.history.push(`/view-account/${id}`);
    }
    editaccount(id){
        this.props.history.push(`/add-account/${id}`);
    }

    componentDidMount(){
        AccountService.getAccounts().then((res) => {
            this.setState({ accounts: res.data});
        });
    }

    addaccount(){
        this.props.history.push('/add-account/_add');
    }

    render() {
        return (
            <div className='accountcontainer'>
                 {/* <h2 className="text-center">Accounts</h2> */}
                 <div className = "row">
                    <button className="btn btn-primary" onClick={() => { window.location.href = "/CreateAccount"}}> Add account</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>First Name</th>                                  
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    {/* <th>Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.accounts.map(
                                        account => 
                                        <tr key = {account.id}>
                                             <td> {account.firstName} </td>   
                                             <td> {account.lastName}</td>
                                             <td> {account.emailId}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => {window.location.href=`/UpdateAccount/${account.id}`}} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteaccount(account.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewaccount(account.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default AccountOverview
