import { Barlow_Semi_Condensed } from "next/font/google";

interface HeaderProps {
    showRules: boolean
    points: string | null
}

const barlow = Barlow_Semi_Condensed({ 
    weight: "800",
    subsets: ['latin'],
})

export default function Header({ showRules, points }: HeaderProps) {
    return(
        <header className={`border-2 rounded-xl border-[var(--border-color)] w-11/12 md:w-3/6 py-3 pl-4 pr-3 flex justify-between items-center ${showRules && "opacity-25"}`}>
            <div className="flex flex-col leading-4 text-xl">
                <p className="text-[var(--light-font)] uppercase">Rock</p>
                <p className="text-[var(--light-font)] uppercase">Paper</p>
                <p className="text-[var(--light-font)] uppercase">Scissors</p>
                <p className="text-[var(--light-font)] uppercase">Lizard</p>
                <p className="text-[var(--light-font)] uppercase">Spock</p>
            </div>
            <div className="bg-[var(--light-font)] rounded-md flex flex-col px-8 py-2 items-center">
                <p className="text-[var(--blue-font)] text-sm leading-4 tracking-wider">SCORE</p>
                <p className={`${barlow.className} text-5xl text-[var(--dark-font)] tracking-wide`}>
                    {points}
                </p>
            </div>
        </header>
    )
}