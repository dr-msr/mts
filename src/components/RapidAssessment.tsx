
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
  } from "@/components/ui/accordion"
import RespiAssessment from "./rapid_assessment/RespiAssessment"
import CirculationAssessment from "./rapid_assessment/CirculationAssessment"
import ConsciousnessAssessment from "./rapid_assessment/ConsciousnessAssessment"
import BleedingAssessment from "./rapid_assessment/BleedingAssessment"
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes"
import { useContext } from "react"
import { ScoreContext } from "@/lib/context"



  
export default function RapidAssessment() {
	const scoreContext = useContext(ScoreContext);
	const { updateScore, ScoreList, clearList } = scoreContext;


	function checkleft(input : string){

		switch (input) {
			case "respiratory":
					if (ScoreList.filter((item) => item.category === 'Rapid Assessment - Breathing').length > 0 && ScoreList.filter((item) => item.category === 'Rapid Assessment - SpO2').length > 0){
						return "line-through";
					} 
					break;

			case "circulation":
				if (ScoreList.filter((item) => item.category === 'Rapid Assessment - Circulation').length > 0){
					return "line-through";
				}
				break;

			case "consciousness":
				if (ScoreList.filter((item) => item.category === 'Rapid Assessment - Consciousness').length > 0){
					return "line-through";
				}
				break;

			case "bleeding":
				if (ScoreList.filter((item) => item.category === 'Rapid Assessment - Bleeding').length > 0){
					return "line-through";
				}
				break;

			default:
				return ""
		}


	}
		

	return (
		<div>
		<div>Complete the following assesment (Respiratory, Circulation, Consciousness and Bleeding)</div>
		<Accordion type="single" collapsible>
  			<AccordionItem value="respiratory">
    		<AccordionTrigger><div className={checkleft("respiratory")}>Respiratory</div></AccordionTrigger>
    		<AccordionContent>
      			<RespiAssessment />
    		</AccordionContent>
  			</AccordionItem>

			  <AccordionItem value="circulation">
    		<AccordionTrigger><div className={checkleft("circulation")}>Circulation</div></AccordionTrigger>
    		<AccordionContent>
				<CirculationAssessment />
    		</AccordionContent>
  			</AccordionItem>

			  <AccordionItem value="consciousness">
    		<AccordionTrigger><div className={checkleft("consciousness")}>Consciousness</div></AccordionTrigger>
    		<AccordionContent>
				<ConsciousnessAssessment />
    		</AccordionContent>
  			</AccordionItem>

			  <AccordionItem value="Bleeding">
    		<AccordionTrigger><div className={checkleft("bleeding")}>Bleeding</div></AccordionTrigger>
    		<AccordionContent>
				<BleedingAssessment	/>
    		</AccordionContent>
  			</AccordionItem>
		</Accordion>
		</div>
	)
}