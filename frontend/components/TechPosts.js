import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import TechPost from "./TechPost";
import Pagination from "./Pagination";
import { perPage } from "../config";

const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    # items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
    posts(where: {parent:1}, first: $first, skip: $skip) {
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

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

const CategoryPage = styled.div`
  background-color: #0e0e0e;
  .content-main {
    padding-top: 80px;
  }
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
  }
`;

class Posts extends Component {
  render() {
    return (
      <Center>
        <CategoryPage>
          <div class="container content-main">
            <div class="row">
              <div class="col-12 col-md-3 similar-blogs">
                <Query
                  query={ALL_POSTS_QUERY}
                  // fetchPolicy="network-only"
                  variables={{
                    skip: this.props.page * perPage - perPage,
                  }}
                >
                  {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error: {error.message}</p>;
                    return (
                      <ItemsList>
                        {data.posts.map((post) => (
                          <TechPost techPost={post} key={post.id} />
                        ))}
                      </ItemsList>
                    );
                  }}
                </Query>
              </div>
              <div class="col-12 col-md-9 blog-content">
                <Query
                  query={ALL_POSTS_QUERY}
                  // fetchPolicy="network-only"
                  variables={{
                    skip: this.props.page * perPage - perPage,
                  }}
                >
                  {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error: {error.message}</p>;
                    return (
                      <ItemsList>
                        {data.posts.map((post) => (
                          <TechPost techPost={post} key={post.id} />
                        ))}
                      </ItemsList>
                    );
                  }}
                </Query>
              </div>
            </div>
          </div>
        </CategoryPage>
      </Center>
    );
  }
}

export default Posts;
export { ALL_POSTS_QUERY };
