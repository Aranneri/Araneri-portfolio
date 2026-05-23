"use client";

import type { ReactNode } from "react";
import { Component } from "react";

interface ErrorBoundaryProps {
  readonly children: ReactNode;
}

interface ErrorBoundaryState {
  readonly hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-[var(--radius-lg)] border border-sand-200/20 bg-palm-900/50 p-6 text-sm text-sand-200/80">
          Something went wrong. Please refresh or return later.
        </div>
      );
    }

    return this.props.children;
  }
}
