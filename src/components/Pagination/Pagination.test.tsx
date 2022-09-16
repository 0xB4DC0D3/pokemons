import { Pagination } from "@components"
import { createMockStore } from "@store"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"

describe("Pagination component", () => {
  test("Buttons should change state", async () => {
    const store = createMockStore({});

    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    expect(screen.getByText(/next/i)).toHaveTextContent("Next");
    expect(screen.getByText(/previous/i)).toHaveTextContent("Previous");
  });
});