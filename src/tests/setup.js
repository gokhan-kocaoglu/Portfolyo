import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

if (typeof window !== "undefined") {
  if (!window.matchMedia) {
    window.matchMedia = function () {
      return {
        matches: false,
        addEventListener: () => {},
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {},
        onchange: null,
        dispatchEvent: () => false,
      };
    };
  }

  if (typeof window.IntersectionObserver === 'undefined') {
    class IntersectionObserver {
      constructor() {}
      observe() {}
      disconnect() {}
      unobserve() {}
      takeRecords() { return []; }
    }
    window.IntersectionObserver = IntersectionObserver;
    global.IntersectionObserver = IntersectionObserver;
  }
}