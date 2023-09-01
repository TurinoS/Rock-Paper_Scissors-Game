'use client'

import Header from "@/components/Header";
import RulesModal from "@/components/RulesModal";
import SelectSection from "@/components/SelectSection";
import { useState } from "react";

export default function Home() {
  const [showRules, setShowRules] = useState(false)

  return (
    <main className="flex h-screen flex-col items-center gap-16 p-8">
      <Header showRules={showRules} />
      <SelectSection showRules={showRules} />
      
      {showRules && <RulesModal handleOnClick={() => setShowRules(false)} />}
      
      <button 
        className="border-2 border-[var(--border-color)] text-[var(--border-color)] absolute z-2 bottom-12 right-12 py-2 px-8 rounded-lg tracking-widest hover:text-[var(--light-font)] hover:border-[var(--light-font)]"
        onClick={() => setShowRules(true)}  
      >
        RULES
      </button>
    </main>
  )
}
