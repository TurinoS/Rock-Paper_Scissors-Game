import Image from "next/image";
import rules from "../assets/image-rules-bonus.svg"
import x from "../assets/icon-close.svg"

interface ModalProps {
    handleOnClick: () => void
}

export default function RulesModal({ handleOnClick }: ModalProps) {
    return(
        <div className="bg-[var(--light-font)] rounded-lg absolute z-2 top-28 px-12 py-8">
            <div className="flex justify-between mb-4">
                <h2 className="text-3xl text-[var(--dark-font)]">RULES</h2>
                <Image src={x} alt="close" width={30} className="cursor-pointer" onClick={() => handleOnClick()} />
            </div>
            <Image src={rules} alt="Rules: Scissors > Paper > Rock > Lizard > Spock > Scissors" width={285} />
        </div>
    )
}