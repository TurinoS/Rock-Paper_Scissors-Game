import scissors from "../assets/icon-scissors.svg"
import paper from "../assets/icon-paper.svg"
import rock from "../assets/icon-rock.svg"
import lizard from "../assets/icon-lizard.svg"
import spock from "../assets/icon-spock.svg"
import Image from "next/image"

export default function ResponseSection() {
    return(
        <section className="flex gap-16">
            <div>
                <h3 className="text-xl text-center mb-8 uppercase">You picked</h3>
                <p 
                    className="py-6 pr-8 pl-10 rounded-full bg-[var(--light-font)] hover:scale-105"
                    style={{
                        border: "20px solid var(--spock1)",
                        boxShadow: "inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--spock2)"
                    }}
                >
                    <Image src={spock} alt="spock" width={70} />
                </p>
            </div>
            <div>
                <h3 className="text-xl text-center mb-8 uppercase">House picked</h3>
                <p  
                    className="py-6 pr-8 pl-10 rounded-full bg-[var(--light-font)] hover:scale-105"
                    style={{
                        border: "20px solid var(--spock1)",
                        boxShadow: "inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--spock2)"
                    }}
                >
                    <Image src={spock} alt="spock" width={70} />
                </p>
            </div>
        </section>
    )
}