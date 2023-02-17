import React from 'react';
class Updating extends React.Component {
    state= {
        Username:'',
        On:false
    }
    logUser = async (e) => {
        await this.setState({Username:e.target.value})
        if(this.state.Username === "Jx2-0Admin")this.props.Admin()
    }
    turnOn = () => {
        this.setState({On: true})
    }
    render() {
        const Component =
            <div className="coming-soon">
                <button className="btn btn-lg" style={{backgroundColor : '#dddddf'}} onClick={this.turnOn}></button>
                <div className="container">
                    <div className="box">
                        <div className="animation">
                            <div className="one spin-one"></div>
                            <div className="two spin-two"></div>
                            <div className="three spin-one"></div>
                        </div>
                        <div className='h1 mb-2'>Server under maintenance </div>
                        <p>Update in progress. We will be back in :</p>
                        <div className="h2 text-danger my-2"> {this.props.remains} </div>
                        {this.state.On && <input type="text" value={this.state.Username} onChange={e => this.logUser(e)}/>}
                    </div>
                </div>
            </div>;
        return Component ;
    }
}
export default Updating ;