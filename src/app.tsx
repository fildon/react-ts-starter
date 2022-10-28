import { useState } from "react";

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<main className="stack center">
			<h1>Hello world</h1>
			<p>
				This project is intended as a React/TypeScript starter template. You can
				see the source here:{" "}
				<a href="https://github.com/fildon/react-ts-starter/">
					react-ts-starter
				</a>
			</p>
			<span>
				Click the button to prove React is working. If the number goes up, then
				everything is good 👍
			</span>
			<button
				onClick={() => {
					setCount((c) => c + 1);
				}}
			>
				{count}
			</button>
		</main>
	);
};
