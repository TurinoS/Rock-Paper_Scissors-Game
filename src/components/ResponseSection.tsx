import scissors from "../assets/icon-scissors.svg";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import lizard from "../assets/icon-lizard.svg";
import spock from "../assets/icon-spock.svg";
import Image from "next/image";

interface ResponseProps {
  userPick: number;
  housePick: number;
  firstStep: boolean;
  secondStep: boolean;
  thirdStep: boolean;
  playAgain: () => void;
  wld: string;
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

export default function ResponseSection({
  userPick,
  housePick,
  firstStep,
  secondStep,
  thirdStep,
  playAgain,
  wld,
}: ResponseProps) {
  const houseChoice = choicesMap[housePick];
  const userChoice = choicesMap[userPick];
  const housecolorChoice = colorChoicesMap[housePick];
  const usercolorChoice = colorChoicesMap[userPick];

  return (
    <>
      {firstStep && (
        <section className="flex gap-14 md:gap-28"
            style={{transform: window.innerWidth < 500 ? "scale(0.8)" : "none",}}
        >
          <div>
            <h3 className="text-xl text-center mb-16 uppercase tracking-widest">
              You picked
            </h3>
            <p
              className={`${
                userPick === 1 || userPick === 2
                  ? "py-8 pr-9 pl-10"
                  : userPick === 3
                  ? "p-9"
                  : userPick === 4
                  ? "py-10 pr-9 pl-10"
                  : "py-7 pr-9 pl-10"
              } rounded-full bg-[var(--light-font)]`}
              style={{
                width: "186px",
                height: "186px",
                border: `20px solid var(--${usercolorChoice}1)`,
                boxShadow: `inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--${usercolorChoice}2)`,
              }}
            >
              <Image src={userChoice} alt={userChoice} width={70} />
            </p>
          </div>
          <div>
            <h3 className="text-xl text-center mb-16 uppercase tracking-widest">
              The house picked
            </h3>
            <p
              className="rounded-full bg-[var(--bg2)] p-24"
              style={{
                boxShadow: `inset 0 4px 0 1px rgb(0 0 0 / 0.3)`,
              }}
            >
              <Image src={houseChoice} alt={houseChoice} width={70} hidden />
            </p>
          </div>
        </section>
      )}

      {secondStep && (
        <section className="flex gap-14 md:gap-28"
            style={{transform: window.innerWidth < 500 ? "scale(0.8)" : "none",}}
        >
          <div>
            <h3 className="text-xl text-center mb-16 uppercase tracking-widest">
              You picked
            </h3>
            <p
              className={`${
                userPick === 1 || userPick === 2
                  ? "py-8 pr-9 pl-10"
                  : userPick === 3
                  ? "p-9"
                  : userPick === 4
                  ? "py-10 pr-9 pl-10"
                  : "py-7 pr-9 pl-10"
              } rounded-full bg-[var(--light-font)]`}
              style={{
                width: "186px",
                height: "186px",
                border: `20px solid var(--${usercolorChoice}1)`,
                boxShadow: `inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--${usercolorChoice}2)`,
              }}
            >
              <Image src={userChoice} alt={userChoice} width={70} />
            </p>
          </div>
          <div>
            <h3 className="text-xl text-center mb-16 uppercase tracking-widest">
              The house picked
            </h3>
            <p
              className={`${
                housePick === 1 || housePick === 2
                  ? "py-8 pr-9 pl-10"
                  : housePick === 3
                  ? "p-9"
                  : housePick === 4
                  ? "py-10 pr-9 pl-10"
                  : "py-7 pr-9 pl-10"
              } rounded-full bg-[var(--light-font)]`}
              style={{
                width: "186px",
                height: "186px",
                border: `20px solid var(--${housecolorChoice}1)`,
                boxShadow: `inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--${housecolorChoice}2)`,
              }}
            >
              <Image src={houseChoice} alt={houseChoice} width={70} />
            </p>
          </div>
        </section>
      )}

      {thirdStep && (
        <section className="flex flex-col md:flex-row md:gap-16 gap-8"
            style={{transform: window.innerWidth < 500 ? "scale(0.8)" : "none",}}
        >
          <div className="flex gap-14 md:gap-28">
            <div>
              <h3 className="text-xl text-center mb-16 uppercase tracking-widest">
                You picked
              </h3>
              <p
                className={`${
                  userPick === 1 || userPick === 2
                    ? "py-8 pr-9 pl-10"
                    : userPick === 3
                    ? "p-9"
                    : userPick === 4
                    ? "py-10 pr-9 pl-10"
                    : "py-7 pr-9 pl-10"
                } rounded-full bg-[var(--light-font)]`}
                style={{
                  width: "186px",
                  height: "186px",
                  border: `20px solid var(--${usercolorChoice}1)`,
                  boxShadow: `inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--${usercolorChoice}2)`,
                }}
              >
                <Image src={userChoice} alt={userChoice} width={70} />
              </p>
            </div>
            <div className="self-center mt-16 hidden md:block">
              <h2 className="text-4xl mb-6 tracking-widest">
                {wld === "lose"
                  ? "YOU LOSE"
                  : wld === "win"
                  ? "YOU WIN"
                  : wld === "draw" && "DRAW"}
              </h2>
              <button
                onClick={() => playAgain()}
                className="bg-[var(--light-font)] rounded-lg py-2 w-full text-[var(--bg1)] tracking-widest"
              >
                PLAY AGAIN
              </button>
            </div>
            <div>
              <h3 className="text-xl text-center mb-16 uppercase tracking-widest">
                The house picked
              </h3>
              <p
                className={`${
                  housePick === 1 || housePick === 2
                    ? "py-8 pr-9 pl-10"
                    : housePick === 3
                    ? "p-9"
                    : housePick === 4
                    ? "py-10 pr-9 pl-10"
                    : "py-7 pr-9 pl-10"
                } rounded-full bg-[var(--light-font)]`}
                style={{
                  width: "186px",
                  height: "186px",
                  border: `20px solid var(--${housecolorChoice}1)`,
                  boxShadow: `inset 0 4px 0 1px rgb(0 0 0 / 0.3), 0 4px 0 1px var(--${housecolorChoice}2)`,
                }}
              >
                <Image src={houseChoice} alt={houseChoice} width={70} />
              </p>
            </div>
          </div>
          <div className="self-center mt-8 md:hidden">
            <h2 className="text-6xl mb-6 tracking-widest">
              {wld === "lose"
                ? "YOU LOSE"
                : wld === "win"
                ? "YOU WIN"
                : wld === "draw" && "DRAW"}
            </h2>
            <button
              onClick={() => playAgain()}
              className="bg-[var(--light-font)] rounded-lg py-2 w-full text-[var(--bg1)] tracking-widest"
            >
              PLAY AGAIN
            </button>
          </div>
        </section>
      )}
    </>
  );
}
