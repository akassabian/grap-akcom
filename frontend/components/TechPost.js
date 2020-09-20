import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default class TechPost extends Component {
  static propTypes = {
    techPost: PropTypes.object.isRequired,
  };

  render() {
    const { techPost } = this.props;
    function createMarkup() {
      return { __html: techPost.content };
    }
    return (
      <>
        <h2>
          <strong>
            <Link
              href={{
                pathname: "/post",
                query: { id: techPost.id },
              }}
            >
              <a class="post-title-main">{techPost.title}</a>
            </Link>
          </strong>
        </h2>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </>
    );
  }
}
