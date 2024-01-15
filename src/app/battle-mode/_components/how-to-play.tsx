import React, { useState, Fragment } from "react";
import { Tooltip } from "react-tooltip";
import BottomDialog from "./bottom-dialog";
import { useRouter } from "next/navigation";
import {
    DEFAULT_POPUP_DATA,
    TOURNAMENT_POPUP_DATA,
    ROUTES,
    CHESS_PIECE_ICONS,
    type PieceKey,
} from "@/constants";
import Rupee from "./rupee";
import { getCloudfareUrl } from "@/utils";

const HowToPlay = ({
    children,
    isGameOver = true,
    isTournamentPage = false,
}: {
    children?: React.ReactNode;
    isGameOver?: boolean;
    isTournamentPage?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handlePopup = () => {
        setIsOpen((prev) => !prev);
    };

    const POPUP_DATA = isTournamentPage
        ? TOURNAMENT_POPUP_DATA
        : DEFAULT_POPUP_DATA;

    return (
        <Fragment>
            <div
                className="w-full"
                data-testid={"how-to-play-btn"}
                onClick={handlePopup}
            >
                {children}
            </div>
            <BottomDialog
                open={isOpen}
                setIsOpen={setIsOpen}
                onClose={handlePopup}
                dialogContentClassName={"!px-5 !pt-8 !pb-15"}
            >
                <div className="flex flex-col">
                    <p className="text-gray-5 font-basement-grotesque text-center text-base font-extrabold">
                        {isTournamentPage
                            ? "Daily League | How to play"
                            : "How to play"}
                    </p>
                    <div className="bg-dark-blue-1 mt-3 flex w-full flex-col gap-y-2 p-4">
                        <div className="flex flex-col gap-y-3">
                            {POPUP_DATA.STEPS.map(({ id, title, subtitle }) => (
                                <div
                                    className="xxs:gap-x-2 xs:gap-x-4 flex items-center justify-start gap-x-4"
                                    key={id}
                                >
                                    <div className="w-1/8 border-dark-blue xxs:h-8 xxs:w-8 xs:h-10 xs:w-10 flex h-9 w-9 items-center justify-center rounded-[10px] border">
                                        <span className="text-dark-blue font-basement-grotesque xxs:text-lg xs:text-xl h-fit w-full text-center text-xl font-extrabold">
                                            {id}
                                        </span>
                                    </div>
                                    <div className="w-7/8 flex flex-col">
                                        <h2 className="text-gray-4 font-poppins text-sm font-medium">
                                            {title}
                                        </h2>
                                        <h4 className="text-gray-5 font-poppins text-xs font-normal">
                                            {subtitle}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="max-w-80/100 xxs:max-w-full xs:max-w-80/100 mx-auto flex w-full flex-col items-center gap-y-1">
                            <div className="mb-2 mt-3 h-full w-full border-[0.5px] border-dashed border-[#8C8C8C] " />
                            <h2 className="text-gray-5 font-poppins text-xs font-medium underline">
                                {isTournamentPage
                                    ? "Prize Distribution"
                                    : "Points Breakdown"}
                            </h2>
                            <div className="mx-auto mt-2 flex w-3/4 flex-col gap-y-1">
                                {POPUP_DATA.POINTS.map(
                                    ({ id, point, piece }) => {
                                        const src =
                                            piece === "Checkmate"
                                                ? getCloudfareUrl(
                                                      "chess/checkmate"
                                                  )
                                                : CHESS_PIECE_ICONS[
                                                      piece.toLowerCase() as PieceKey
                                                  ]?.black ??
                                                  getCloudfareUrl(
                                                      "chess/checkmate"
                                                  );

                                        return (
                                            <div
                                                key={id}
                                                className="flex w-full items-center justify-between rounded-md"
                                            >
                                                <div className="flex w-1/2 items-center gap-x-2">
                                                    {!isTournamentPage && (
                                                        <img
                                                            src={src}
                                                            alt=""
                                                            width={18}
                                                            height={18}
                                                        />
                                                    )}
                                                    <p className="text-gray-5 font-poppins text-left text-xs font-light">
                                                        {piece}
                                                    </p>
                                                </div>
                                                <div className="flex w-[45%] items-center justify-between">
                                                    <span className="text-gray-5 font-poppins text-xs font-light">
                                                        :
                                                    </span>
                                                    <p className="text-gray-5 font-poppins text-right text-xs font-light">
                                                        {isTournamentPage && (
                                                            <Rupee />
                                                        )}{" "}
                                                        {point}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                                {isTournamentPage && (
                                    <p className="text-gray-5 font-poppins text-left text-xs font-light">
                                        and many more...
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex w-full flex-col items-center justify-center gap-y-4">
                        <button
                            className="bg-dark-pink-1 text-gray-4 font-basement-grotesque h-10 w-full cursor-pointer rounded-md text-center text-sm font-extrabold"
                            type="submit"
                            onClick={handlePopup}
                        >
                            Understood
                        </button>
                        {!isGameOver && (
                            <Tooltip
                                anchorSelect={`.know-more-btn`}
                                content={
                                    "Please finish the live game to go to this page"
                                }
                            />
                        )}
                        <p
                            className={`know-more-btn text-gray-5 font-basement-grotesque text-center text-sm font-extrabold underline ${
                                isGameOver ? "cursor-pointer" : "opacity-50"
                            }`}
                            onClick={() => {
                                if (isGameOver) {
                                    router.push(ROUTES.rules());
                                }

                                return;
                            }}
                        >
                            Know more
                        </p>
                    </div>
                </div>
            </BottomDialog>
        </Fragment>
    );
};

export default HowToPlay;
