import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("Should not allowed click button when disabled is present ", () => {
  const { container } = render(<Button isDisabled ></Button>);

expect(container.querySelector("span.disabled")).toBeInTheDocument();
}); 