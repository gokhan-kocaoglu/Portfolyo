import { renderAppWait } from "./renderApp.jsx";

describe("App async", () => {
  it("renders and eventually loads hero greeting", async () => {
    await renderAppWait();
  });
});
