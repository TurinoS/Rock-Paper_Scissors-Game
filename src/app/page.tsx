import Header from "@/components/Header";
import SelectSection from "@/components/SelectSection";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center gap-16 p-8">
      <Header />
      <SelectSection />
      <button className="border-2 border-[var(--border-color)] text-[var(--border-color)] absolute z-2 bottom-12 right-12 py-2 px-8 rounded-lg tracking-widest hover:text-[var(--light-font)] hover:border-[var(--light-font)]">
        REGRAS
      </button>
    </main>
  )
}
