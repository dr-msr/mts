'use client' 

import Header from "@/components/Header"
import PrimaryTriage from "@/components/PrimaryTriage"
import { Score, ScoreContext } from "@/lib/context";
import { useState } from "react";




export default function Home() {
	const [ScoreList, setScoreList] = useState([] as Score[]);
	const [isSafe, setIsSafe] = useState(false)
  
	const clearList = () => setScoreList([]);
	
	const setSafe = (value: boolean) => setIsSafe(value);

	const updateScore = (input : Score) => {
		var newList = ScoreList.filter((item) => item.category !== input.category)
		newList.push(input)
		setScoreList(newList);
	}






	




  	return (
		<ScoreContext.Provider value={{ ScoreList, clearList, updateScore, isSafe, setSafe }}>
			<main className={`flex min-h-screen flex-col items-center justify-start gap-2 ${!isSafe ? 'border-8 border-red-500 animate-pulse' : ''}`}>				
			<Header />
			<PrimaryTriage />
    		</main>
		</ScoreContext.Provider>
  );
}
