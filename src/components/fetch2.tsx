"use client";

import { tinponism } from "@prisma/client";
import React from "react";
import { useState, useEffect } from "react";

type ResType = {
	data: tinponism;
};

const Fetch2 = () => {
	const [posts, setPosts] = useState<tinponism>({
		id: 1,
		akarusa: 0,
		time: new Date(),
	});
	var ti = 0;
	useEffect(() => {
		(async () => {
			const fetchData = await fetch("https://pbl-f3vr.vercel.app/api", { method: "GET" })
				.then<ResType>(res => res.json())
				.then(d => d.data);
			setPosts(fetchData);
		})();
	}, []);

	return <div>{posts?.akarusa < 3000 ? "aitenai" : "aiteiru"}</div>;
};

export default Fetch2;
