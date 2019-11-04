import React from "react";

import "./styles/BadgesList.css";
import twitterLogo from "../images/twitter-brands.svg";

class BadgesList extends React.Component {
	render() {
		return (
			<ul className="list-unstyled">
				{this.props.badges.map(badge => {
					return (
						<li key={badge.id}>
							<div className="badge-item">
								<div className="badge-item__avatar">
									<img src={badge.avatarUrl} alt="Avatar" />
								</div>
								<div className="badge-item__info">
									<h5 className="font-weight-bold">
										{badge.firstName} {badge.lastName}
									</h5>
									<p className="badge-item__twitter">
										<img
											className="img-fluid"
											src={twitterLogo}
											alt="Twitter"
										/>
										@{badge.twitter}
									</p>
									<p>{badge.jobTitle}</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default BadgesList;
