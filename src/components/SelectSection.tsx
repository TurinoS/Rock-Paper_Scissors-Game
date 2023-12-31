import pentagon from "../assets/bg-pentagon.svg"
import scissors from "../assets/icon-scissors.svg"
import paper from "../assets/icon-paper.svg"
import rock from "../assets/icon-rock.svg"
import lizard from "../assets/icon-lizard.svg"
import spock from "../assets/icon-spock.svg"
import Image from "next/image"
import { useEffect, useState } from "react"

interface SelectProps {
    userSelect: (choice: number) => void
}

export default function SelectSection({ userSelect }: SelectProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 500);
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <section className="bg-no-repeat bg-center flex flex-col items-center"
            style={{
                backgroundImage: `url(${pentagon.src})`,
                width: '100%',
                transform: isMobile ? "scale(0.8)" : "none",
            }}
        >
            <button 
                className="relative bottom-6 py-4 px-5 rounded-full bg-[var(--light-font)] hover:scale-105"
                style={{
                    width: "114px",
                    height: "114px",
                    border: "13px solid var(--scissors1)",
                    boxShadow: "inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--scissors2)"
                }}
                onClick={() => {userSelect(1)}} 
            >
                <Image src={scissors} alt="scissors" width={40} height={40} />
            </button>

            <div className="flex gap-40 relative bottom-8">
                <button 
                    className="py-4 pr-5 pl-6 rounded-full bg-[var(--light-font)] hover:scale-105"
                    style={{
                        width: "114px",
                        height: "114px",
                        border: "13px solid var(--spock1)",
                        boxShadow: "inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--spock2)"
                    }}
                    onClick={() => {userSelect(5)}} 
                >
                    <Image src={spock} alt="spock" width={40} height={40} />
                </button>
                <button 
                    className="py-4 pr-6 pl-5 rounded-full bg-[var(--light-font)] hover:scale-105"
                    style={{
                        width: "114px",
                        height: "114px",
                        border: "13px solid var(--paper1)",
                        boxShadow: "inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--paper2)"
                    }}
                    onClick={() => {userSelect(2)}} 
                >
                    <Image src={paper} alt="paper" width={40} height={40} />
                </button>
            </div>

            <div className="flex gap-14 mt-6">
                <button 
                    className="p-6 rounded-full bg-[var(--light-font)] hover:scale-105"
                    style={{
                        width: "114px",
                        height: "114px",
                        border: "13px solid var(--lizard1)",
                        boxShadow: "inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--lizard2)"
                    }}
                    onClick={() => {userSelect(4)}} 
                >
                    <Image src={lizard} alt="lizard" width={40} height={40} />
                </button>
                <button 
                    className="p-6 rounded-full bg-[var(--light-font)] hover:scale-105"
                    style={{
                        width: "114px",
                        height: "114px",
                        border: "13px solid var(--rock1)",
                        boxShadow: "inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--rock2)"
                    }}
                    onClick={() => {userSelect(3)}} 
                >
                    <Image src={rock} alt="rock" width={40} height={40} />
                </button>
            </div>
        </section>
    )
}