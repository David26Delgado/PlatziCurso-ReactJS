import React from "react";

import "./styles/Home.css";
import astronauts from "../images/astronauts.svg";
import conf from "../images/platzi-conf.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid vh-100 home-container overflow-hidden">
      <div className="row h-100 align-items-center">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-4 align-self-center d-flex justify-content-center">
              <div className="custom-container">
                <img
                  className="platzi-conf"
                  src={conf}
                  alt="Logo Platzi Conf"
                />
                <h1 className="h3 text-uppercase mt-4 text">
                  Print your badges
                </h1>
                <p className="text">
                  The easiest way to manage your conference
                </p>
                <div className="text-center">
                  <Link className="btn btn-primary text" to="/badges/new">
                    Start now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-8 text-center">
              <img
                className="astronauts"
                src={astronauts}
                alt="Imágen de astronautas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
