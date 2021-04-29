import { Person } from '@utils/types';
import React from 'react'

interface MyProps {
    person:Person
	index:number
}

export const PersonItem: React.FC<MyProps> = ({person,index}) => {
        return (<>
		{/* <h3>{JSON.stringify(person)}</h3> */}
		<div>
			<h2 className="">{index}.{person.discord_tag}</h2>
			<p><b>Coins: {person.coins}</b></p>
			<p><b>Trees Planted: {person.trees}</b></p>
			<p><b>Trees Withered: {person.deadtrees}</b></p>
		</div>
        </>);
}
export default PersonItem;