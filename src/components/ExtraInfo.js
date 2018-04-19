import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setExtraInfo } from './../actions/actions';

const ExtraInfoInput = props => {

    return (
        <div>
            <textarea className="form-control" rows="3" name="usertext" placeholder="Type here..." onChange={props.handleAnswer} value={props.currentValue} ></textarea>
        </div>
    );
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
                <br />
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