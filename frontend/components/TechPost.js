import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import DeleteItem from "./DeleteItem";
import AddToCart from "./AddToCart";

export default class TechPost extends Component {
  static propTypes = {
    techPost: PropTypes.object.isRequired,
  };

  render() {
    const { techPost } = this.props;
    return (
      <ItemStyles>
        <Title>
          <Link
            href={{
              pathname: "/techPost",
              query: { id: techPost.id },
            }}
          >
            <a>{techPost.title}</a>
          </Link>
        </Title>
      </ItemStyles>
    );
  }
}
