import React, { Fragment, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { getCloudfareUrl } from "@/utils";
import { SUPPORT_EMAIL } from "@/constants";

const FAQ_LISTS = [
    {
        question: "What is Ziffi Chess?",
        answer: "Ziffi Chess is a 6-move battle format chess game. For more details, pls read ",
        link: (
            <Link href="rules" className="text-dark-blue underline">
                Detailed Rules.
            </Link>
        ),
    },
    {
        question: "Do I need to deposit money to play?",
        answer: "No, you can play Ziffi Chess free of cost. We will soon launch our real money game as well.",
    },
    {
        question: "What is Free Roll?",
        answer: "Free Roll is a free-to-play game. Here you can play for free, and win cash rewards.",
    },
    {
        question: "How can I withdraw winnings?",
        answer: "You can withdraw by raising request through the Withdraw option on your wallet. Please link your PAN card before raising the request.",
    },
    {
        question: "I have reached the winning limit. What does it mean?",
        answer: "You can win upto a maximum of Rs 10 daily in the Free Roll game. This limit is set in accordance with our responsible gaming policy.",
    },
    {
        question: "Is it safe?",
        answer: "Ziffi Chess is absolutely safe to play. Chess is a game of skill. The platform provided by Ziffi Chess is 100% safe and verified.",
    },
    {
        question: "What is the platform fee at Ziffi Chess?",
        answer: "There is no platform fee to play the Free Roll game at Ziffi Chess.",
    },
    {
        question: "Do I need to pay tax on winning?",
        answer: "Yes, TDS of 30% will be applicable on all your winnings under Section 194 BA as per the guidelines by CBDT (Central Board of Direct Taxes).",
    },
    {
        question: "I need help. How do I contact you?",
        answer: `Please reach out to ${SUPPORT_EMAIL} (we will reach back to you within 24 hours).`,
    },
    {
        question: "Do I need to pay any fee to play?",
        answer: "The Free Roll game at Ziffi Chess is absolutely free to play.",
    },
];

const GameFAQ = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenItems((prevOpenItems) => {
            return prevOpenItems.includes(index)
                ? prevOpenItems.filter((item) => item !== index)
                : [...prevOpenItems, index];
        });
    };

    return (
        <div className="bg-dark-black-3 mt-4 w-full">
            <div className="max-w-95/100 bg-dark-black-2 mx-auto mt-3 flex w-full flex-col p-3">
                <h3 className="text-gray-12 font-poppins text-left text-base font-medium">
                    FAQs
                </h3>
                <div className="mt-3 flex flex-col">
                    <Accordion.Root type="single" className="w-full rounded">
                        {FAQ_LISTS.map(({ question, answer, link }, index) => {
                            const isOpen = openItems.includes(index);

                            return (
                                <Accordion.Item
                                    value={`item-${index}`}
                                    className="bg-dark-black mb-3 w-full cursor-pointer p-3"
                                    key={index}
                                >
                                    <Accordion.Trigger
                                        className="w-full"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <Accordion.Header className="flex w-full items-center justify-between">
                                            <p className="text-gray-10 font-poppins text-left text-sm font-normal">
                                                {question}
                                            </p>
                                            <img
                                                src={getCloudfareUrl(
                                                    "icons/down-arrow"
                                                )}
                                                alt="chevron-down"
                                                height={20}
                                                width={20}
                                                className={
                                                    isOpen
                                                        ? "rotate-[180deg] transform"
                                                        : ""
                                                }
                                            />
                                        </Accordion.Header>
                                        <p className="text-gray-10 font-poppins text-left text-xs font-normal">
                                            {isOpen ? (
                                                <Fragment>
                                                    {answer}{" "}
                                                    <span
                                                        onClick={(e) =>
                                                            link
                                                                ? e.stopPropagation()
                                                                : {}
                                                        }
                                                    >
                                                        {link ?? ""}
                                                    </span>
                                                </Fragment>
                                            ) : (
                                                answer.slice(0, 40) + "..."
                                            )}
                                        </p>
                                    </Accordion.Trigger>
                                </Accordion.Item>
                            );
                        })}
                    </Accordion.Root>
                </div>
                <p className="text-gray-10 font-poppins text-10 font-medium">
                    Read{" "}
                    <Link href="rules" className="underline">
                        Detailed Rules
                    </Link>
                </p>
                <p className="text-gray-10 font-poppins text-10 mt-0.5 font-medium">
                    Read{" "}
                    <Link href="terms-and-conditions" className="underline">
                        Terms & Conditions
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default GameFAQ;
