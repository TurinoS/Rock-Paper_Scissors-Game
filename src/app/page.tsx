

import Header from "@/components/Header";
import ResponseSection from "@/components/ResponseSection";
import RulesModal from "@/components/RulesModal";
import SelectSection from "@/components/SelectSection";
import { useState } from "react";

export default function Home() {
  const [showRules, setShowRules] = useState(false)
  const [houseChoice, setHouseChoice] = useState(0)
  const [userPicker, setUserPicker] = useState("")

  const housePicker = () => {
    setHouseChoice(Math.floor(Math.random() * 5) + 1);
    console.log(userPicker, houseChoice)
  }

  return (
    <main className="flex h-screen flex-col items-center gap-16 p-8">
      <Header showRules={showRules} />
      {userPicker === "" ?
        <SelectSection houseChoice={housePicker} UserPicker={setUserPicker}/>
      :
        <ResponseSection />
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
