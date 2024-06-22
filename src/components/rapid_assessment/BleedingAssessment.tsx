'use client' 

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScoreContext } from "@/lib/context";
import { BleedingAssessmentRes } from "@/lib/mts_resource/RapidAssessmentRes"
import { useContext, useState } from "react";

  
export default function BleedingAssessment() {
	const criteria = BleedingAssessmentRes.slice().reverse();
	const scoreContext = useContext(ScoreContext);
	const { updateScore, ScoreList } = scoreContext;

	const getCurrentValue = () => {
		const currentValue = ScoreList.filter((item) => item.category === 'Rapid Assessment - Bleeding')
		return currentValue.length > 0 ? currentValue[0].name : ""
	}

	const handleValue = (id: string) => {
		const newScore = criteria.filter((item) => item.name === id)
		const newList = {
			name: newScore[0].name,
			level: newScore[0].level,
			category: 'Rapid Assessment - Bleeding'
		}

		updateScore(newList);
	}
	return (
	<div>
		<div>Assess if there is any bleeding externally, any suspicion of internal bleeding. Consider any bleeding disorder or anticoagulation therapy. Select the best assessment : </div>
		<div className="p-2">
		<RadioGroup defaultValue={getCurrentValue()} onValueChange={(index) => handleValue(index)}>
			{ criteria.map((item) => (
				<div className="flex items-center space-x-2">
   				<RadioGroupItem value={item.name} />
				<Label htmlFor={item.name}>{item.name}</Label>
  				</div>
			))}
			</RadioGroup>
		</div>
		</div>
	)
}