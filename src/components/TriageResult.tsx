import { useContext } from "react";
import { Button } from "./ui/button";
import { ScoreContext } from "@/lib/context";

export default function TriageResult() {
	const scoreContext = useContext(ScoreContext);
	const { updateScore, ScoreList, isSafe } = scoreContext;

	if (ScoreList.length != 6 || isSafe == false) {
		return (
			<Button>Calculate Triage</Button>
		)
	} else {
		var totalred = 0;
		var totalorange = 0;
		var totalyellow = 0;

		ScoreList.forEach((item) => {
			if (item.level == 1) {
				totalred += 1;
			} else if (item.level == 2) {
				totalorange += 1;
			} else if (item.level == 3) {
				totalyellow += 1;
			}

		})


		if (totalred > 0 || totalorange > 1 || totalyellow > 3) {
			return (<Button>Proceed Triage Red</Button>);
		} else if (totalred == 0 && totalorange == 0 && totalyellow <= 1) {
			return (<Button>Secondary Triage</Button>);}
		else {
			return (<Button>Proceed Triage Yellow</Button>);		
		}

	}
}