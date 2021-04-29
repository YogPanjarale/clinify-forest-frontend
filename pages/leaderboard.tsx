import { Person } from "@utils/types";
import { PersonItem } from "@components/leaderboard/item";
export default ({ people }: { people: Person[] }) => {
	return (
		<section className="text-gray-600 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="-my-8 divide-y-2 divide-gray-100">
					<PersonItem
						person={{
							avatar: "helloavatar",
							coins: 1000,
							deadtrees: 100,
							discord_tag: "no",
							id: 123,
							level: 222,
							trees: 2,
						}}
					/>
					{people.map((value,index) => {
						return <PersonItem key={index} person={value}/>
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
