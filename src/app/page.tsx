'use client'

import Header from "@/components/Header";
import ResponseSection from "@/components/ResponseSection";
import RulesModal from "@/components/RulesModal";
import SelectSection from "@/components/SelectSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [showRules, setShowRules] = useState(false)
  const [houseChoice, setHouseChoice] = useState(0)
  const [userPicker, setUserPicker] = useState(0)
  const [firstStep, setFirstStep] = useState(true)
  const [secondtStep, setSecondStep] = useState(false)
  const [thirdStep, setThirdStep] = useState(false)
  const [wld, setWLD] = useState("draw");
  const [points, setPoints] = useState(0);

  const housePicker = () => {
    setHouseChoice(Math.floor(Math.random() * 5) + 1);
  }

  const playAgain = () => {
    setUserPicker(0);
    setFirstStep(true);
    setThirdStep(false);
  }

  const userSelect = (choice: number) => {
    setUserPicker(choice);
    housePicker()

    setTimeout(() => {
      setFirstStep(false);
      setSecondStep(true);
  
      setTimeout(() => {
        setSecondStep(false);
        setThirdStep(true);
      }, 600);
    }, 600);
  };

  useEffect(() => {
    if (
      (userPicker === 1 && houseChoice === 2) ||
      (userPicker === 2 && houseChoice === 3) ||
      (userPicker === 3 && houseChoice === 4) ||
      (userPicker === 4 && houseChoice === 5) ||
      (userPicker === 5 && houseChoice === 1) ||
      (userPicker === 3 && houseChoice === 1) ||
      (userPicker === 4 && houseChoice === 2) ||
      (userPicker === 5 && houseChoice === 3) ||
      (userPicker === 1 && houseChoice === 4) ||
      (userPicker === 2 && houseChoice === 5)
      
    ) {
      setWLD("win");
      setTimeout(() => {
        setPoints(points + 1)
      }, 1200)

    } else if (
      (userPicker === 2 && houseChoice === 1) ||
      (userPicker === 3 && houseChoice === 2) ||
      (userPicker === 4 && houseChoice === 3) ||
      (userPicker === 5 && houseChoice === 4) ||
      (userPicker === 1 && houseChoice === 5) ||
      (userPicker === 1 && houseChoice === 3) ||
      (userPicker === 2 && houseChoice === 4) ||
      (userPicker === 3 && houseChoice === 5) ||
      (userPicker === 4 && houseChoice === 1) ||
      (userPicker === 5 && houseChoice === 2)
    ) {
      setWLD("lose");
      setTimeout(() => {
        setPoints(points - 1)
      }, 1200)

    } else { setWLD("draw") }
  }, [houseChoice, userPicker])

  return (
    <main className="flex h-screen flex-col items-center gap-16 p-8">
      <Header showRules={showRules} points={points} />
      {userPicker === 0 ?
        <SelectSection userSelect={userSelect}/>
      :
        <ResponseSection userPick={userPicker} housePick={houseChoice} firstStep={firstStep} secondStep={secondtStep} thirdStep={thirdStep} playAgain={playAgain} wld={wld} />
      }
      
      {showRules && <RulesModal handleOnClick={() => setShowRules(false)} />}
      
      <button 
        className="border-2 border-[var(--border-color)] text-[var(--border-color)] absolute z-2 bottom-12 right-12 py-2 px-8 rounded-lg tracking-widest hover:text-[var(--light-font)] hover:border-[var(--light-font)]"
        onClick={() => setShowRules(!showRules)}  
      >
        RULES
      </button>
    </main>
  )
}
