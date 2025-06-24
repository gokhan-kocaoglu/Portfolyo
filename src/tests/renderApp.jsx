// renderAppWait.jsx
import { vi } from "vitest";
import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App.jsx";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { data } from "../data/data.js";

// Lottie mock doğru
vi.mock("lottie-react", () => ({
  default: () => <div data-testid="lottie-mock" />,
}));

// axios.post'u başta Promise dönecek şekilde mock'la
axios.post = vi.fn(() =>
  Promise.resolve({ data: { json: data } })
);

beforeEach(() => {
  axios.post.mockReset();
  axios.post.mockImplementation(() =>
    Promise.resolve({ data: { json: data } })
  );
});

export async function renderAppWait() {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // İlk "Loading" gelir mi?
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  // Hero greeting gelir mi?
  await waitFor(() => {
    expect(screen.getByText(/Hi!|Merhaba !/i)).toBeInTheDocument();
  });
}
