import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderAppWait } from "./renderApp.jsx";

describe("DarkModeSwitch", () => {
  afterEach(() => {
    document.documentElement.classList.remove("dark");
  });

  beforeEach(async () => {
    await renderAppWait();
  });

  it("toggles dark mode on and off", async () => {

    const button = screen.getByTestId("btnDark");

    expect(document.documentElement.classList.contains("dark")).toBe(false);

    await userEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    await userEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("label changes based on theme", async () => {

    const button = screen.getByTestId("btnDark");

    expect(screen.getByTestId("darkmode-label").textContent.replace(/\s+/g, " ").trim()).toBe("DARK MODE");

    await userEvent.click(button);
    expect(screen.getByTestId("darkmode-label").textContent.replace(/\s+/g, " ").trim()).toBe("LIGHT MODE");
  });
});
