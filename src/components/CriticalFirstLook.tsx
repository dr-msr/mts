'use client'

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScoreContext } from "@/lib/context";
import { CriteriaFirstLook } from "@/lib/mts_resource/CriteriaFirstLookRes"
import { useContext } from "react";

export default function CriticalFirstLook() {

	const criteria = CriteriaFirstLook.slice().reverse();
	const scoreContext = useContext(ScoreContext);
	const { updateScore, ScoreList, clearList } = scoreContext;

	const getCurrentValue = () => {
		const currentValue = ScoreList.filter((item) => item.category === 'Critical First Look')
		return currentValue.length > 0 ? currentValue[0].name : ""
	}

	const handleValue = (id: string) => {
		const newScore = criteria.filter((item) => item.name === id)
		const newList = {
			name: newScore[0].name,
			level: newScore[0].level,
			category: 'Critical First Look'
		}

		if (newList.level === 1) {
			alert("Proceed Resuscitation Immediately");
			clearList();
		} else {
			updateScore(newList);
		}

		updateScore(newList);
	}

	return (
		<RadioGroup defaultValue={getCurrentValue()} onValueChange={(value) => handleValue(value)}>
			{criteria.map((item) => (
				<div key={item.id} className="flex items-center space-x-2">
					<RadioGroupItem value={item.name}/>
					<Label htmlFor={item.name}>{item.name}</Label>
				</div>
			))}


</RadioGroup>

	)
}
