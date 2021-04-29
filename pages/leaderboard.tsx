import { Person } from "@utils/types";
import { PersonItem } from "@components/leaderboard/item";
export default ({ people }: { people: Person[] }) => {
	return (
		<section className="text-gray-600 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="-my-8 divide-y-2 divide-gray-100">
					{people.map((value,index) => {
						return <PersonItem key={index} index={index+1} person={value}/>
					})}
				</div>
			</div>
		</section>
	);
};
export async function getServerSideProps({ params }) {
	const req = await fetch(
		`https://clinifyforest.herokuapp.com/clinifyforest/api/getlb/15?format=json`
	);
	const data: Person[] = await req.json();

	return {
		props: { people: data },
	};
}
