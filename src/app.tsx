import { useState } from "react";

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Hello world</h1>
			<span>Click the button to prove React is working</span>
			<button
				onClick={() => {
					setCount((c) => c + 1);
				}}
			>
				{count}
			</button>
		</>
	);
};
