'use client'

import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Checkbox } from "@/components/ui/checkbox"
import React, { useContext, useEffect, useState } from "react"
import { ScoreContext } from "@/lib/context"


export const Safety: React.FC = () => {
	const [isSafe, setIsSafe] = useState(false)
	const [isInfectious, setIsInfectious] = useState<boolean | any>(false)
	const [isHazardous, setIsHazardous] = useState<boolean | any>(false)
	const [isViolent, setIsViolent] = useState<boolean | any>(false)


	const scoreContext = useContext(ScoreContext);
	const { setSafe } = scoreContext;

	useEffect(() => {
		if (isInfectious && isHazardous && isViolent) {
			setIsSafe(false)
			setSafe(true)
		} else {
			setIsSafe(true)
			setSafe(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInfectious, isHazardous, isViolent])

	return (
		<div className="flex justify-center flex-col items-center">
		
			<div>
			<Carousel className="w-full max-w-xs min-w-xs">
      			<CarouselContent>
          
		  			<CarouselItem>
            			<div className="p-1">
              				<Card>
                				<CardContent className="flex flex-col aspect-square items-center justify-between p-6">
                  					<span className="text-2xl font-semibold">Infection</span>
									<div>Any suspicion of transmissible diseases - Influenza, Covid, Active TB, Meningococcemia, CRE/MRSA, Ebola </div>
				  					<div className="flex items-center space-x-2">
      									<Checkbox id="terms" onCheckedChange={(value) => setIsInfectious(value)} />
      										<label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
												Patient is not infectious / wears proper PPE / isolated.
      										</label>
    								</div>
                				</CardContent>
              				</Card>
            			</div>
          			</CarouselItem>

					  <CarouselItem>
            			<div className="p-1">
              				<Card>
                				<CardContent className="flex flex-col aspect-square items-center justify-between p-6">
                  					<span className="text-2xl font-semibold">Hazard</span>
									<div>Any evidence or suspicion of dry, liquid or inhaled chemicals, radioactive exposure. </div>

				  					<div className="flex items-center space-x-2">
									  <Checkbox id="terms" onCheckedChange={(value) => setIsHazardous(value)} />
      										<label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
												Patient is not hazardous / decontaminated.
      										</label>
    								</div>
                				</CardContent>
              				</Card>
            			</div>
          			</CarouselItem>

					  <CarouselItem>
            			<div className="p-1">
              				<Card>
                				<CardContent className="flex flex-col aspect-square items-center justify-between p-6">
                  					<span className="text-2xl font-semibold">Violence</span>
									<div> Any hints of aggression, violents, suspicion or evidence of weapons.</div>

				  					<div className="flex items-center space-x-2">
									  <Checkbox id="terms" onCheckedChange={(value) => setIsViolent(value)} />
      										<label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
												Patient is not violent
      										</label>
    								</div>
                				</CardContent>
              				</Card>
            			</div>
          			</CarouselItem>

		
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
			</div>



			<div className="text-center mt-2">
				<Button disabled={isSafe}>
					<ShieldCheck className="mr-2 h-4 w-4"  />I have confirmed that the patient is safe.
				</Button>
				{ isSafe && <div className="text-red-500 text-xs">Please verify all three criteria above.</div> }
			</div>

		</div>
	)
}

export default Safety