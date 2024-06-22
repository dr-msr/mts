import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
  } from "@/components/ui/accordion"
  import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
  } from "@/components/ui/card"
import CriticalFirstLook from "@/components/CriticalFirstLook"
import RapidAssessment from "@/components/RapidAssessment"
import Safety from "./Safety"
import { useContext } from "react"
import { ScoreContext } from "@/lib/context"
import { criteria } from "@/lib/mts_resource/RapidAssessmentRes"




  

export default function PrimaryTriage() {

	const scoreContext = useContext(ScoreContext);
	const { isSafe, ScoreList } = scoreContext;
 
	return (
		<Tabs defaultValue="adult" className="w-full">

		<div className="flex w-full mx-2 flex-col justify-center items-center">

			<div className="w-full px-2">
			<Card>
  				<CardHeader>
    				<CardTitle className="py-2">Primary Triage</CardTitle>
					<div className="text-sm">
					<div className={`px-1 ${isSafe ? 'bg-green-200 text-black' : 'bg-red-200 text-black'}`}>{ isSafe ? "Patient is safe for assessment" : "Patient is not safe for assessment"}</div>						{ 
  
 
  					ScoreList.sort((a, b) => criteria.indexOf(a.category) - criteria.indexOf(b.category)).map((item) => (
					<div key={item.name} className={`px-1 ${item.level === 4 ? 'bg-gray-200 text-black' : item.level === 1 ? 'bg-red-200 text-black' : item.level === 2 ? 'bg-orange-200 text-black' : 'bg-yellow-200 text-black'}`}>{item.category} : {item.name}</div>))}					
					</div>

  				</CardHeader>

  			<CardContent>
				<TabsContent value="adult" className="w-full">
					<Accordion type="single" defaultValue="item-3" collapsible className="w-full">

					<AccordionItem value="item-3" className="mx-2">
							<AccordionTrigger>Safety</AccordionTrigger>
							<AccordionContent>
							<Safety />
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-1" className="mx-2">
							<AccordionTrigger>Critical First Look</AccordionTrigger>
							<AccordionContent>
								<CriticalFirstLook />
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-2" className="mx-2">
							<AccordionTrigger>Rapid Assessment</AccordionTrigger>
							<AccordionContent>
								<RapidAssessment />
							</AccordionContent>
						</AccordionItem>



					</Accordion>
				</TabsContent>
				<TabsContent value="peds">
					<Accordion type="single" collapsible className="w-full">

					<AccordionItem value="item-3" className="mx-2">
							<AccordionTrigger>Safety</AccordionTrigger>
							<AccordionContent>
								<Safety />
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-1" className="mx-2">
							<AccordionTrigger>Critical First Look</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-2" className="mx-2">
							<AccordionTrigger>Paediatric Assessment Triangle</AccordionTrigger>
							<AccordionContent>
								Yes. It comes with default styles that matches the other components&apos; aesthetic.
							</AccordionContent>
						</AccordionItem>

					

					</Accordion>

				</TabsContent>


			
			  			</CardContent>

  			

			</Card>
			</div>
			
			<TabsList className=" fixed bottom-10 right-10 border">
					<TabsTrigger value="adult">Adult</TabsTrigger>
					<TabsTrigger value="peds">Pediatric</TabsTrigger>
			</TabsList>

		</div>
		</Tabs>
	)
}