
import React, { Component } from 'react';
import './../../css/cssoverride.css';

const PersonRanking = props => (
  <div className="ibox float-e-margins">
    <div className="ranking_card">
      <div className="row ranking_container_first">
        <div className="col-xs-1">
          <p className="PersonRanking__number"> 1 </p>
        </div>
        <div className="col-xs-2">
          <img className="img-circle rankingImage rankingImage-martin" alt="" />
        </div>
        <div className="col-xs-6">
          <p className="PersonRanking__name"> Martin S. </p>
        </div>
        <div className="col-xs-3">
          <p className="PersonRanking__avg">Avg time</p>
          <p className="PersonRanking__time"> 2.3m</p>
          <p className="PersonRanking__pos">
            <i className="fa fa-caret-up" aria-hidden="true" /> 2
          </p>
        </div>
      </div>

      <div className="row ranking_container">
        <div className="col-xs-1">
          <p className="PersonRanking__number"> 2 </p>
        </div>
        <div className="col-xs-2">
          <img className="img-circle rankingImage rankingImage-bob" alt="" />
        </div>
        <div className="col-xs-6">
          <p className="PersonRanking__name"> Bob J </p>
        </div>
        <div className="col-xs-3">
          <p className="PersonRanking__avg">Avg time</p>
          <p className="PersonRanking__time"> 2.75m</p>
          <p className="PersonRanking__pos">
            <i className="fa fa-caret-up" aria-hidden="true" /> 2
          </p>
        </div>
      </div>

      <div className=" row ranking_container">
        <div className="col-xs-1">
          <p className="PersonRanking__number"> 3 </p>
        </div>
        <div className="col-xs-2">
          <img className="img-circle rankingImage rankingImage-mike" alt="" />
        </div>
        <div className="col-xs-6">
          <p className="PersonRanking__name"> Mike G. </p>
        </div>
        <div className="col-xs-3">
          <p className="PersonRanking__avg">Avg time</p>
          <p className="PersonRanking__time"> 2.7m</p>
          <p className="PersonRanking__pos">
            <i className="fa fa-caret-up" aria-hidden="true" /> 2
          </p>
        </div>
      </div>

      <div className="row ranking_container_gray">
        <div className="col-xs-1">
          <p className="PersonRanking__number"> 4 </p>
        </div>
        <div className="col-xs-2">
          <img className="img-circle rankingImage rankingImage-seth" alt="" />
        </div>
        <div className="col-xs-6">
          <p className="PersonRanking__name"> Seth H. </p>
        </div>
        <div className="col-xs-3">
          <p className="PersonRanking__avg">Avg time</p>
          <p className="PersonRanking__time"> 2.9m</p>
          <p className="PersonRanking__pos">
            <i className="fa fa-caret-up" aria-hidden="true" /> 2
          </p>
        </div>
      </div>

      <div className="row ranking_container_gray">
        <div className="col-xs-1">
          <p className="PersonRanking__number"> 5 </p>
        </div>
        <div className="col-xs-2">
          <img className="img-circle rankingImage rankingImage-tim" alt="" />
        </div>
        <div className="col-xs-6">
          <p className="PersonRanking__name"> Tim W. </p>
        </div>
        <div className="col-xs-3">
          <p className="PersonRanking__avg">Avg time</p>
          <p className="PersonRanking__time"> 4.32m</p>
          <p className="PersonRanking__pos">
            <i className="fa fa-caret-up" aria-hidden="true" /> 2
          </p>
        </div>
      </div>
    </div>
    <div className="row ranking_container_button">
    <button className="PersonRanking__btn" >
    Show me more
    </button>
    </div>
  </div>
);
export default PersonRanking;
