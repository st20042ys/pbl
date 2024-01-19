"use client";

import { tinponism } from "@prisma/client";
import React from "react";
import { useState, useEffect } from "react";

type ResType = {
	data: tinponism;
};

const Fetch2 = () => {
	const [posts, setPosts] = useState<tinponism>();
	var ti = 0;
	useEffect(() => {
		(async () => {
			const fetchData = await fetch("http://localhost:3000/api/1", { method: "GET" })
				.then<ResType>(res => res.json())
				.then(d => d.data);
			setPosts(fetchData);
		})();
	}, []);

	return <div>{posts?.akarusa < 3000 || undefined ? "aitenai" : "aiteiru"}</div>;
};

export default Fetch2;
