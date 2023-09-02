'use client'

import scissors from "../assets/icon-scissors.svg"
import paper from "../assets/icon-paper.svg"
import rock from "../assets/icon-rock.svg"
import lizard from "../assets/icon-lizard.svg"
import spock from "../assets/icon-spock.svg"
import Image from "next/image"

interface ResponseProps {
    userPick: number
    housePick: number
}

interface ChoicesMap {
    [key: number]: string;
}

const choicesMap: ChoicesMap = {
    1: scissors,
    2: paper,
    3: rock,
    4: lizard,
    5: spock,
};

const colorChoicesMap: ChoicesMap = {
    1: "scissors",
    2: "paper",
    3: "rock",
    4: "lizard",
    5: "spock",
};

export default function ResponseSection({ userPick, housePick }: ResponseProps) {
    const houseChoice = choicesMap[housePick]
    const userChoice = choicesMap[userPick]
    const housecolorChoice = colorChoicesMap[housePick]
    const usercolorChoice = colorChoicesMap[userPick]

    return(
        <section className="flex gap-16">
            <div>
                <h3 className="text-xl text-center mb-8 uppercase">You picked</h3>
                <p 
                    className={`${userPick === 1 || userPick === 2 ? "py-8 pr-9 pl-10" : userPick === 3 ? "p-9" : userPick === 4 ? "py-10 pr-9 pl-10" : "py-7 pr-9 pl-10"} rounded-full bg-[var(--light-font)]`}
                    style={{
                        border: `20px solid var(--${usercolorChoice}1)`,
                        boxShadow: `inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--${usercolorChoice}2)`
                    }}
                >
                    <Image src={userChoice} alt={userChoice} width={70} />
                </p>
            </div>
            <div>
                <h3 className="text-xl text-center mb-8 uppercase">House picked</h3>
                <p  
                    className={`${housePick === 1 || housePick === 2 ? "py-8 pr-9 pl-10" : housePick === 3 ? "p-9" : housePick === 4 ? "py-10 pr-9 pl-10" : "py-7 pr-9 pl-10"} rounded-full bg-[var(--light-font)]`}
                    style={{
                        border: `20px solid var(--${housecolorChoice}1)`,
                        boxShadow: `inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--${housecolorChoice}2)`
                    }}
                >
                    <Image src={houseChoice} alt={houseChoice} width={70} />
                </p>
            </div>
        </section>
    )
}