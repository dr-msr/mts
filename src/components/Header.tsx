import TriageResult from "./TriageResult";

export default function Header() {

	return (
		<div className="flex w-full justify-between items-center gap-2 p-2 border-b">
			<div className="">MTS App - Dev</div>
			<div><TriageResult /></div>
		</div>


	)
}