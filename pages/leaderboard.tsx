import { Person } from "@utils/types";
import { PersonItem } from "@components/leaderboard/item";
export default ({ people }: { people: Person[] }) => {
	return (
				<div className="bg-gradient-to-r from-green-400 to-blue-500 py-10">
					{people.map((value,index) => {
						return <PersonItem key={index} index={index+1} person={value}/>
					})}
					
				</div>
	);
};
export async function getServerSideProps({ params }) {
	const req = await fetch(
		`https://clinifyforest.herokuapp.com/clinifyforest/api/getlb/50?format=json`
	);
	const data: Person[] = await req.json();

	return {
		props: { people: data },
	};
}
