import { Person } from "@utils/types";
import React from "react";

interface MyProps {
	person: Person;
	index: number;
}

export const PersonItem: React.FC<MyProps> = ({ person, index }) => {
	return (
		// <div className="space-y-5 m-10 align-middle">
			// {/* <h3>{JSON.stringify(person)}</h3> */}
			<div className="space-y-5 m-10 align-middle">
				<div className="p-2 mx-auto flex flex-col shadow-lg space-y-4  rounded-xl text-center max-w-prose border-white border-2 bg-gray-50 bg-opacity-50 hover:bg-opacity-90 transition font-bold text-gray-700 hover:text-gray-900">
				<h2 className="text-xl">
					{index}.{person.discord_tag}
				</h2>
				<p>
					<b>Coins: {person.coins}</b>
				</p>
				<p>
					<b>Trees Planted: {person.trees}</b>
				</p>
				<p>
					<b>Trees Withered: {person.deadtrees}</b>
				</p>
				</div>
			</div>
		// {/* </div> */}
	);
};
export default PersonItem;
