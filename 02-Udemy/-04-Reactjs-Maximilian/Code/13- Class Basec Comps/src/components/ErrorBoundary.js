import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    console.log("EB re run");
    this.state = { hasError: false };
  }

  // didCatch = error boundary

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>No USERS were found</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
