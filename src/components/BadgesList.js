import React from "react";

import "./styles/BadgesList.css";
import twitterLogo from "../images/twitter-brands.svg";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="badge-item">
        <div className="badge-item__avatar">
          <Gravatar email={this.props.badge.email} />
        </div>
        <div className="badge-item__info">
          <h5 className="font-weight-bold">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </h5>
          <p className="badge-item__twitter">
            <img className="img-fluid" src={twitterLogo} alt="Twitter" />@
            {this.props.badge.twitter}
          </p>
          <p>{this.props.badge.jobTitle}</p>
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div className="text-center">
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`badges/${badge.id}/edit`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
