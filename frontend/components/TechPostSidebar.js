import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default class TechPost extends Component {
  static propTypes = {
    techPost: PropTypes.object.isRequired,
  };

  render() {
    const { techPost } = this.props;
    return (
      <li>
        <Link
          href={{
            pathname: "/post",
            query: { id: techPost.id },
          }}
        >
          <a class="post-title-side">{techPost.title}</a>
        </Link>
      </li>
    );
  }
}
