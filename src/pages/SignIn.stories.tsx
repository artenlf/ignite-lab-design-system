import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";
import { SignIn } from "./SignIn";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "User logged in!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Type your e-mail address"),
      "artenlf@email.com"
    );
    userEvent.type(
      canvas.getByPlaceholderText("Type your password"),
      "12345678"
    );

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("User logged in!")).toBeInTheDocument();
    });
  },
};
