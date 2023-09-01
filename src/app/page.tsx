import Header from "@/components/Header";
import SelectSection from "@/components/SelectSection";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center gap-16 p-12">
      <Header />
      <SelectSection />
    </main>
  )
}
