"use client";

import { tinponism } from "@prisma/client";
import React from "react";
import { useState, useEffect } from "react";

type ResType = {
	data: tinponism;
};

const Fetch = () => {
	const [posts, setPosts] = useState<tinponism | undefined>(undefined);
	var ti = 0;
	useEffect(() => {
		(async () => {
			const fetchData = await fetch("https://pbl-f3vr.vercel.app/api", { method: "GET" })
				.then<ResType>(res => res.json())
				.then(d => d.data)
				.catch(e => {
					console.log(e);
					throw e;
				});
			console.log(JSON.stringify(posts));
			console.log(JSON.stringify(fetchData));
			console.log(typeof fetchData.time);
			const fetchDate = new Date(fetchData.time);
			console.log(fetchDate);
			fetchDate.setTime(fetchDate.getTime() + 30 * 60 * 1000);
			setPosts(
				fetchData && {
					...fetchData,
					time: fetchDate,
				},
			);
		})();
	}, [setPosts, posts]);

	return <div key={posts?.id}>{posts && posts.time.toLocaleString()}</div>;
};

export default Fetch;
