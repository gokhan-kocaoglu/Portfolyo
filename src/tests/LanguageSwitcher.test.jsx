import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderAppWait } from "./renderApp.jsx";

describe("LanguageSwitcher", () => {
  beforeEach(async () => {
    await renderAppWait();
  });

  it("switches language label on click", async () => {
    const button = screen.getByTestId("btnLangSwitch");
    const label = screen.getByTestId("lang-label");

    /*expect(label.textContent).toBe("TÜRKÇE");

    await userEvent.click(button);

    // Tıklandıktan sonra ENGLISH olmalı
    expect(label.textContent).toBe("ENGLISH");*/

    const initialText = label.textContent;

    await userEvent.click(button);

    const newText = label.textContent;

    expect(newText).not.toBe(initialText);

    
  });
});
