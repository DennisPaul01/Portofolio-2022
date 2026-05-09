import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";
import { customTheme } from "./customeTheme";

test("renders the portfolio home page", async () => {
  render(
    <MemoryRouter>
      <ChakraProvider resetCSS theme={customTheme}>
        <App />
      </ChakraProvider>
    </MemoryRouter>
  );

  expect(
    await screen.findByText(/Hello, my name is Denis/i)
  ).toBeInTheDocument();
});
