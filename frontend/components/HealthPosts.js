import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import HealthPost from "./HealthPost";
import HealthPostSidebar from "./HealthPostSidebar";
import { perPage } from "../config";

const ALL_HEALTH_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    # items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
    posts(where: {parent:2}, first: $first, skip: $skip) {
        id
        title
        type
        content
        excerpt
        comment_status
        comment_count
        password
        parent
        slug
        createdAt
        updatedAt
    }
  }
`;

const CategoryPage = styled.div`
  background-color: #0e0e0e;
  .content-main {
    margin-top: 32px;
    overflow: hidden;
  }
  .similar-blogs {
    ul {
      list-style: none;
      padding-left: 0;
      li {
        margin-bottom: 20px;
      }
      a {
        color: #f7f7f7;
        text-decoration: none;
      }
      a:hover {
        color: #007bff;
      }
    }
  }
  .blog-content {
    ul{
      white-space: pre-line;
      padding-left: 0;
    }
    h2 {
      margin-bottom: 20px;
      margin-top: 30px;
    }
    h2:first-of-type {
      margin-top: 0;
    }
    .post-title-main {
      color: #f7f7f7;
      text-decoration: none;
    }
    .post-title-main:hover {
      color: #007bff;
    }
    a{
      color: #007bff;
    }
  }
`;

class HealthPosts extends Component {
  render() {
    return (
      <CategoryPage>
        <div class="container content-main">
          <div class="row">
            <div class="col-12 col-md-3 similar-blogs">
              <Query
                query={ALL_HEALTH_POSTS_QUERY}
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
                            <a href="#">Health</a>
                          </strong>
                        </h2>
                      </li>
                      {data.posts.map((post) => (
                        <HealthPostSidebar healthPost={post} key={post.id} />
                      ))}
                    </ul>
                  );
                }}
              </Query>
            </div>
            <div class="col-12 col-md-9 blog-content">
              <Query
                query={ALL_HEALTH_POSTS_QUERY}
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
                      {data.posts.map((post) => (
                        <HealthPost healthPost={post} key={post.id} />
                      ))}
                    </ul>
                  );
                }}
              </Query>
            </div>
          </div>
        </div>
      </CategoryPage>
    );
  }
}

export default HealthPosts;
export { ALL_HEALTH_POSTS_QUERY };
