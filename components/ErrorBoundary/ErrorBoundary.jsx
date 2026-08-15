import { Component } from "react";

/**
 * Keeps a failing subtree from taking down the whole page.
 *
 * The 3D scenes need WebGL. On a machine without it (hardware acceleration
 * turned off, an older phone, a locked-down work laptop) three.js throws while
 * rendering, React unmounts everything above it, and the visitor gets a blank
 * page reading "Application error". Wrapping each canvas means they lose the
 * animation and keep the site.
 */
class ErrorBoundary extends Component {
    state = { failed: false };

    static getDerivedStateFromError() {
        return { failed: true };
    }

    componentDidCatch(error) {
        if (process.env.NODE_ENV !== "production") {
            console.error("Render failed inside ErrorBoundary:", error);
        }
    }

    render() {
        if (this.state.failed) {
            return this.props.fallback ?? null;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
