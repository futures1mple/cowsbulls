import { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}