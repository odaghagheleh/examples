/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setExtraInfo } from './../actions/actions';

const ExtraInfoInput = props => {

    return (
        <div>
            <textarea className="form-control" rows="3" name="usertext" placeholder="Type here..." onChange={props.handleAnswer} value={props.currentValue} ></textarea>
            {console.log(props.currentValue)}
        </div>
    );
}


function disableButton(props) {
    if(props.extraInfos == "") {
    return ( <button name="next" disabled type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => props.jumpToStep(5)} >Next</button> )
    }else{
    return ( <button name="next" type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => props.jumpToStep(5)} >Next</button> )
    }
}

const ExtraInfo = props => {

    return (
        <div>
            <br />
            <div className="row">
                <div className="col-lg-8">
                    <label>3. Is there anything else you'd like to tell us about this dispute? </label>
                    <ExtraInfoInput handleAnswer={(e) => props.setExtraInfo(e.target.value)} currentValue={props.extraInfos} />
                </div>
                <div className="col-lg-2">
                </div>
                <br />
            </div>
            <div className="row">
                    <button name="prev" type="button" className="btn btn-primary btn-sm pull-left stepZillLeftabt" onClick={() => props.jumpToStep(3)} >Prev</button>
                   {disableButton(props)}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        extraInfos: state.extraInfos
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setExtraInfo: (payload) => {
            dispatch(setExtraInfo(payload));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExtraInfo);