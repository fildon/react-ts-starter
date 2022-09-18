import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

import { App } from "./app";

describe("<App />", () => {
	it("increments the counter when clicked", async () => {
		const user = UserEvent.setup();
		render(<App />);

		expect(screen.getByText("Hello world")).toBeInTheDocument();
		expect(screen.getByText("0")).toBeInTheDocument();
		expect(screen.queryByText("1")).not.toBeInTheDocument();

		await user.click(screen.getByRole("button"));

		expect(screen.getByText("1")).toBeInTheDocument();
		expect(screen.queryByText("0")).not.toBeInTheDocument();
	});
});
