"use client";
import React, { Fragment } from "react";
import GameFAQ from "./_components/game-faq";

const BATTLE_MODE_STATUS_VARIANTS = {
    FREE: "Free Roll",
    PAID: "Cash Battle",
};

const index = () => {
    return (
        <Fragment>
            <h1 className="mx-auto my-3 mt-10 text-lg text-white">
                No games found!
            </h1>
            <br />
            <GameFAQ />
        </Fragment>
    );
};

export default index;
