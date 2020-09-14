import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";

export default class HealthPost extends Component {
  static propTypes = {
    healthPost: PropTypes.object.isRequired,
  };

  render() {
    const { healthPost } = this.props;
    return (
      <ItemStyles>
        <Title>
          <Link
            href={{
              pathname: "/post",
              query: { id: healthPost.id },
            }}
          >
            <a>{healthPost.title}</a>
          </Link>
        </Title>
      </ItemStyles>
    );
  }
}
