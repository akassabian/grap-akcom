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
    posts(first: $first, skip: $skip) {
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

class Posts extends Component {
  render() {
    return (
      <Center>
        <Pagination page={this.props.page} />
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
        <Pagination page={this.props.page} />
      </Center>
    );
  }
}

export default Posts;
export { ALL_POSTS_QUERY };
