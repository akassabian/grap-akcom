import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default class HealthPost extends Component {
  static propTypes = {
    healthPost: PropTypes.object.isRequired,
  };

  render() {
    const { healthPost } = this.props;
    return (
      <li>
        <Link
          href={{
            pathname: "/post",
            query: { id: healthPost.id },
          }}
        >
          <a class="post-title-side">{healthPost.title}</a>
        </Link>
      </li>
    );
  }
}
