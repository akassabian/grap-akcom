import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Query } from "react-apollo";
import { perPage } from "../config";
import { ALL_TECH_POSTS_QUERY } from "./TechPosts";

export default class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  render() {
    const { post } = this.props;
    return (
      <Query
      query={ALL_TECH_POSTS_QUERY}
      // fetchPolicy="network-only"
      variables={{
        skip: this.props.page * perPage - perPage,
      }}
    >
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        return (
          <ul>
            <li>
              <h2>
                <strong>
                  <a href="#">Technology</a>
                </strong>
              </h2>
            </li>
            {data.posts.map((post) => (
              <li>
              <Link
                href={{
                  pathname: "/post",
                  query: { id: post.id },
                }}
              >
                <a class="post-title-side">{post.title}</a>
              </Link>
            </li>
            ))}
          </ul>
        );
      }}
    </Query>

    );
  }
}
