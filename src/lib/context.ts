import { ReactNode, createContext, useContext, useState } from "react";

export interface Score {
	name: string;
	level: number;
	category: string;
}


export interface ScoreContextType {
	ScoreList: Score[];
	clearList: () => void;
	updateScore: (item: Score) => void;
	isSafe: boolean;
	setSafe: (value: boolean) => void;
}

export type ScoreProviderProps = {
	children: ReactNode;
};

export const ScoreContext = createContext<ScoreContextType>({
	ScoreList: [],
	clearList: () => {},
	isSafe: false,
	setSafe: () => {},
	updateScore: () => {},
});
