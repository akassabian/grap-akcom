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
      <>
        <Link
          href={{
            pathname: "/post",
            query: { id: techPost.id },
          }}
        >
          <h2>
            <strong>
              <a class="post-title-main">{techPost.title}</a>
            </strong>
          </h2>
        </Link>
        <div>{techPost.content}</div>
      </>
    );
  }
}
