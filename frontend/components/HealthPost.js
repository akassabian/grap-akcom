import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default class HealthPost extends Component {
  static propTypes = {
    healthPost: PropTypes.object.isRequired,
  };

  render() {
    const { healthPost } = this.props;
    function createMarkup() {
      return { __html: healthPost.content };
    }
    return (
      <>
        <h2>
          <strong>
            <Link
              href={{
                pathname: "/post",
                query: { id: healthPost.id },
              }}
            >
              <a class="post-title-main">{healthPost.title}</a>
            </Link>
          </strong>
        </h2>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </>
    );
  }
}
