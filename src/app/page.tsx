"use client";

import { useState } from "react";
import Fetch from "../components/fetch";
import Fetch2 from "../components/fetch2";

const Home = () => {
	return (
		<>
			<div className="border-b-4">
				<div className="text-7xl flex justify-center items-center">お風呂空き状況CHECKシステム</div>
			</div>
			<div className="text-4xl">
				今の空き状況は...
				<button onClick={() => window.location.reload()} className="bg-gray-400">
					reload
				</button>
			</div>

			<div className="border-4">
				<div className="text-xl flex">
					1,2年生:
					<div className="flex">
						<Fetch2 />
					</div>
				</div>
				<div className="text-xl flex">
					3年生:
					<div className="flex">coming soon</div>
				</div>
				<div className="text-xl flex">
					4,5年生:
					<div className="flex">coming soon</div>
				</div>
			</div>

			<div className="text-4xl">空きができる予想時間</div>
			<div className="border-4">
				<div className="text-xl flex">
					1,2年生:
					<div>
						<Fetch />
					</div>
				</div>
				<div className="text-xl flex">
					3年生:
					<div>coming soon</div>
				</div>
				<div className="text-xl flex">
					4,5年生:
					<div>coming soon</div>
				</div>
			</div>
		</>
	);
};

export default Home;
