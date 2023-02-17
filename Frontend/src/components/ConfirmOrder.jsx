import React from 'react';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBSpinner,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { BsCheckLg } from 'react-icons/bs';
import { MdError } from 'react-icons/md';
class ConfirmOrder extends React.Component {

    Leave = () => {
        window.location.reload();
    }
    render() {
        const Component =
            <>
                <MDBModal staticBackdrop tabIndex="-1" show={this.props.show}>
                    <MDBModalDialog centered >
                        <MDBModalContent className='bg-colorPrimary text-custom'>
                            <MDBModalHeader>
                                <h5 className="modal-title">Confirm Order</h5>
                                <button type="button" className="btn-close" onClick={this.props.Toggle} aria-label="Close"></button>
                            </MDBModalHeader>
                            {!this.props.pending && !this.props.success && !this.props.fail && <MDBModalBody className='fw-lighter'>
                                <p>Name : {this.props.Name}</p>
                                <p>Phone Number : +961 {this.props.Number}</p>
                                <p>Requested Amount : {this.props.Amount}</p>
                                <hr />
                                <p>Dear Mr(s). {this.props.Name}</p>
                                <p>The amount you have requested to {this.props.Buying ? "BUY" : "SELL"} has a commission amount totalling to ${this.props.Commission}</p>
                                <p>please choose your desired amount :</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="paymentAmount" id="Min" onChange={(e) => { this.props.toggleMinMax(e) }} defaultChecked="true" />
                                    <label className="form-check-label" htmlFor="Min">
                                        {this.props.Buying ? <>Pay <span className="fw-normal">${this.props.Amount}</span> and recieve <span className="fw-normal"> USDT {this.props.Min}</span></>
                                            : <>Pay <span className="fw-normal">USDT {this.props.Amount}</span> and recieve <span className="fw-normal">${this.props.Min}</span></>}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="paymentAmount" id="Max" onChange={(e) => { this.props.toggleMinMax(e) }} />
                                    <label className="form-check-label" htmlFor="Max">
                                        {this.props.Buying ? <>Pay <span className="fw-normal">${this.props.Max}</span> and recieve<span className="fw-normal"> USDT {this.props.Amount} </span></>
                                            : <>Pay <span className="fw-normal">USDT {this.props.Max}</span> and recieve<span className="fw-normal"> ${this.props.Amount}</span></>}
                                    </label>
                                </div>
                            </MDBModalBody>}
                            {this.props.pending &&
                                <MDBModalBody className='mx-auto'>
                                    <>
                                        <MDBSpinner grow color='success' className='ms-3'>
                                            <span className='visually-hidden'>Loading...</span>
                                        </MDBSpinner>
                                        <br />
                                        <div className="mx-auto">Loading...</div>
                                        
                                    </>
                                </MDBModalBody>}
                            {this.props.success && 
                            <MDBModalBody className='mx-auto p-4 text-center' style={{color:'green'}}>
                                <BsCheckLg className='fs-2'/>
                                <p className="mt-2">Thank You, Our representative Will Be In Contact Shortly !</p>
                            </MDBModalBody>
                            }
                            {this.props.fail && 
                            <MDBModalBody className='mx-auto p-4 text-center' style={{color:'red'}}>
                                <MdError className='fs-2'/>
                                <p className="mt-2">OOPS!! Something Went Wrong, Please Try Again Later !</p>
                            </MDBModalBody>
                            }
                            <MDBModalFooter>
                                <button type="button" className="btn btn-secondary" onClick={this.props.Toggle} disabled={this.props.success || this.props.pending}>Cancel</button>
                                {!this.props.success && <button type="button" className="btn btn-primary" onClick={this.props.confirmOrder} disabled={this.props.pending}>Confirm Order</button>}
                                {this.props.success && <button type="button" className="btn btn-primary" onClick={this.Leave} >Return</button>}
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </>
        return Component;
    }
}
export default ConfirmOrder;