import React from "react";
import Back from "./back";
import { useRouter } from "next/navigation";
import { getCloudfareUrl } from "@/utils";
import Rupee from "./rupee";
import HowToPlay from "./how-to-play";

const Header = () => {
    const router = useRouter();

    return (
        <div className={`z-10 flex w-full justify-between py-4`}>
            <div className="flex w-fit items-center justify-start gap-x-2">
                <Back imgParentDivClassName={"!mt-0"} />
                <p className="text-gray-4 font-poppins whitespace-nowrap text-sm font-normal">
                    Battle Mode
                </p>
            </div>
            <div className="flex w-1/2 items-center justify-end gap-x-3">
                <div className="w-fit">
                    <HowToPlay>
                        <img
                            src={getCloudfareUrl("icons/question-mark")}
                            alt="question-mark"
                            width={28}
                            height={28}
                            draggable={false}
                            className="cursor-pointer"
                            loading="lazy"
                        />
                    </HowToPlay>
                </div>
                <div
                    onClick={() => router.push("/wallet")}
                    className="bg-dark-blue-14 flex cursor-pointer items-center justify-center rounded-xl px-4 py-0.5"
                >
                    <img
                        src={getCloudfareUrl("icons/wallet")}
                        alt="wallet"
                        height={16}
                        width={16}
                        className=""
                        loading="lazy"
                    />{" "}
                    &nbsp;
                    <p
                        data-testid="wallet-balance"
                        className="text-gray-4 font-poppins text-sm font-normal"
                    >
                        <Rupee />
                        1000
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
