    import React, { Component } from 'react';
    import { connect } from 'react-redux';

    import { setExtraInfo } from './../actions/actions';

    const ExtraInfoInput = props => {

        return (
            <div className="DecisionQuestionApp__spacer">
                <textarea className="form-control" rows="3" name="usertext" placeholder="Type here..." onChange={props.handleAnswer} value={props.currentValue} ></textarea>
                {console.log(props.currentValue)}
            </div>
        );
    }

    const ExtraInfo = props => {

        return (
            <div>
                <br />
                <div className="row">
                    {/* <p className="DecisionQuestionApp__question">Let us ask a few questions</p> */}
                  <div className="col-lg-8">
                    <label className="DecisionQuestionApp__step">
                        <b>3. Is there anything else you&aposd like to tell us about this dispute?</b>
                    </label>
                        <ExtraInfoInput handleAnswer={(e) => props.setExtraInfo(e.target.value)} currentValue={props.extraInfos} />
                    </div>
                    <div className="col-lg-2">
                    </div>
                    <br />
                </div>
                <div className="row">
                    <button name="prev" type="button" className="btn btn-sm pull-right stepZillLeftabt" onClick={() => props.jumpToStep(1)} ><i className="fa fa-chevron-left"></i></button>
                    {props.extraInfos == "" ?
                        <button name="next" disabled type="button" className="btn btn-primary  pull-right stepZillRightabt" onClick={() => props.jumpToStep(5)} >Next</button>
                        :
                        <button name="next" type="button" className="btn btn-primary  pull-right stepZillRightabt" onClick={() => props.jumpToStep(5)} >Next</button>
                    }
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
