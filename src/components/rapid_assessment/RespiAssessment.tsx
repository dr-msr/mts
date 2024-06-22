'use client' 

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScoreContext } from "@/lib/context";
import { BreathingAssessment, Spo2Assessment } from "@/lib/mts_resource/RapidAssessmentRes"
import { useContext, useState } from "react";

  
export default function RespiAssessment() {

	const criteria_breathing = BreathingAssessment.slice().reverse();
	const criteria_spo2 = Spo2Assessment.slice().reverse();

	const scoreContext = useContext(ScoreContext);
	const { updateScore, ScoreList } = scoreContext;

	
	const getCurrentValueBreathing = () => {

		const currentValue = ScoreList.filter((item) => item.category === 'Rapid Assessment - Breathing')
		return currentValue.length > 0 ? currentValue[0].name : ""
	}

	const getCurrentValueSPO2 = () => {

		const currentValue = ScoreList.filter((item) => item.category === 'Rapid Assessment - SpO2')
		return currentValue.length > 0 ? currentValue[0].name : ""
	}


	const handleValueBreathing = (id: string) => {
		const newScore = criteria_breathing.filter((item) => item.name === id)
		const newList = {
			name: newScore[0].name,
			level: newScore[0].level,
			category: 'Rapid Assessment - Breathing'
		}

		updateScore(newList);
	}


	const handleValueSPO2 = (id: string) => {
		const newScore = criteria_spo2.filter((item) => item.name === id)
		const newList = {
			name: newScore[0].name,
			level: newScore[0].level,
			category: 'Rapid Assessment - SpO2'
		}

		updateScore(newList);
	}


	return (
	<div>
		<div>Assess the patient's breathing pattern and sPO2 measurement: </div>
		<div className="p-2">
			Breathing pattern : 
			<RadioGroup defaultValue={getCurrentValueBreathing()} onValueChange={(value) => handleValueBreathing(value)} className="p-2">
			{ criteria_breathing.map((item) => (
				<div className="flex items-center space-x-2">
   				<RadioGroupItem value={item.name} />
				<Label htmlFor={item.name}>{item.name}</Label>
  				</div>
			))}
			</RadioGroup>
		</div>
		<div className="p-2">
			SpO2 Value : 
			<RadioGroup defaultValue={getCurrentValueSPO2()} onValueChange={(value) => handleValueSPO2(value)} className="p-2">
			{ criteria_spo2.map((item) => (
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