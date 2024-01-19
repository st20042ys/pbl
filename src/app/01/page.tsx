"use client";

import { useState } from "react";

const Home = () => {
	const [num, setNum] = useState(0);
	const countUp = () => {
		setNum(num + 1);
	};
	const countDown = () => {
		setNum(num - 1);
	};

	return (
		<>
			<div className="h-screen w-full flex flex-col space-y-4 items-center justify-center">
				<div className="text-9xl">tintin</div>
				<div className="text-9xl w-full  flex flex-col justify-center items-center">
					<p className="text-center">{num}</p>
					<div className="w-full flex justify-center items-center">
						<button onClick={countUp} className="h-8 w-8 text-sm bg-gray-500">
							+
						</button>
						<button onClick={countDown} className="h-8 w-8 text-sm bg-gray-300">
							-
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
