import { render } from "@testing-library/react";
import Index from "pages/index";

test("renders main role", () => {
  const { container } = render(<Index />);

  expect(container).toMatchSnapshot();
});
