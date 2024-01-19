"use client";

import { ChangeEventHandler, useState } from "react";

type Data = {
	check: boolean;
	name: string;
	delete: boolean;
	id: number;
};
const Home = () => {
	let Idnumber = 0;
	const [Num, setNum] = useState(0);
	const [State, setState] = useState<Data[]>([]);
	const [open, setOpen] = useState<boolean>(false);
	const [name, setName] = useState<string>("");
	const [del, setDel] = useState<boolean>(false);
	const handleTextChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
		setName(value);
	};

	const handleClick = () => {
		setState([...State, { check: false, name, delete: false, id: Idnumber++ }]);
		setName("");
		setOpen(!open);
	};

	return (
		<div className="relative h-screen w-full flex flex-col space-y-4 items-center justify-center">
			<div className="relative h-96 w-96 border border-black">
				<div className="w-full text-center text-6xl">TODOList</div>
				<div className="text-3xl">
					{State.map(({ name }, index) => (
						<li key={index}>
							{name}
							<button
								onClick={() => {
									setDel(!del);
								}}
							>
								delete
							</button>
						</li>
					))}
				</div>
				<button
					className="absolute right-12 rounded-full bottom-8 text-1/2px h-5 w-5 bg-[#BA8D65]"
					onClick={() => {
						setOpen(!open);
					}}
				>
					ball
				</button>
				<button
					className="absolute right-4 rounded-full bottom-8 h-5 w-5 bg-[#BA8D65]"
					onClick={() => {
						setOpen(!open);
					}}
				>
					ball
				</button>
				<button
					className="absolute right-8 rounded-full bottom-8 text-3xl h-16 w-5 bg-[#BA8D65]"
					onClick={() => {
						setOpen(!open);
					}}
				>
					+
				</button>
			</div>
			{open && (
				<>
					<button
						className="absolute flex items-center justify-center text-center top-0 left-0 w-full h-full bg-black/80 "
						onClick={() => {
							setOpen(!open);
						}}
					></button>
					<form
						method="POST"
						className=" p-2 flex flex-col absolute left-1/2 top-1/2 z-20 h-96 w-72 -translate-x-1/2 -translate-y-1/2 text-6xl bg-pink-400"
					>
						<span>input plz</span>
						<input className="text-base w-full" type="text" onChange={handleTextChange} value={name} />
						<div className=" relative h-1 flex-1"></div>
						<button type="submit" onClick={handleClick}>
							submit
						</button>
					</form>
				</>
			)}
		</div>
	);
};

export default Home;
