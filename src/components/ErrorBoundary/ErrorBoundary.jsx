import { Component } from "react";
import { Link } from "react-router-dom";
import "./ErrorBoundary.sass";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-boundary">
          <div className="error-boundary__container container">
            <p className="error-boundary__code">Oops</p>

            <h1 className="error-boundary__title">Something went wrong.</h1>

            <p className="error-boundary__text">
              Please refresh the page or return to the homepage.
            </p>

            <Link to="/" className="error-boundary__button button">
              ← Back Home
            </Link>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
