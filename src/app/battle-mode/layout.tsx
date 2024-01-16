"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "./_components/header";
import { getCloudfareUrl } from "@/utils";

const liveGamesFinalYOffset = 100,
    animationDuration = 0.5;

const Banner = ({
    headerHeight,
    setDidHeaderCollapse,
    didHeaderCollapse,
}: {
    headerHeight: number;
    setDidHeaderCollapse: (didHeaderCollapse: boolean) => void;
    didHeaderCollapse: boolean;
}) => {
    const [initialHeight, setInitialHeight] = useState(0);

    const [scrollY, setScrollY] = useState(0);

    const imageHeight = initialHeight
        ? Math.max(initialHeight - scrollY, headerHeight)
        : 0;

    useEffect(() => {
        // const scrollElement = document.querySelector("#__next");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleScroll = (event: any) => {
            const imageHeight = initialHeight
                ? Math.max(
                      initialHeight - document.documentElement.scrollTop,
                      headerHeight
                  )
                : 0;
            const didHeaderCollapse =
                initialHeight &&
                imageHeight - liveGamesFinalYOffset <= headerHeight;

            setDidHeaderCollapse(!!didHeaderCollapse);

            if (!didHeaderCollapse) setScrollY(window.scrollY);
        };

        document?.addEventListener("scroll", handleScroll);

        return () => {
            document?.removeEventListener("scroll", handleScroll);
        };
    }, [initialHeight, headerHeight]);

    return (
        <Fragment>
            <div
                style={{
                    marginTop: `${scrollY}px`,
                }}
            />
            <div
                className={`${didHeaderCollapse ? "" : "sticky top-0"}`}
                style={
                    initialHeight
                        ? {
                              height: `${imageHeight}px`,
                              opacity: `${imageHeight / initialHeight}`,
                          }
                        : {}
                }
                ref={(ref) => {
                    setInitialHeight(
                        (prevState) =>
                            prevState ||
                            (ref?.getBoundingClientRect().height ?? 0)
                    );
                }}
            >
                {!didHeaderCollapse && (
                    <img
                        src={getCloudfareUrl("battle-mode-banner")}
                        alt={"battle-mode"}
                        className="relative h-full w-full object-fill"
                    />
                )}
            </div>
        </Fragment>
    );
};

const BattleModeLayout = ({ children }: { children: React.ReactNode }) => {
    const [headerHeight, setHeaderHeight] = useState(0);

    const [didHeaderCollapse, setDidHeaderCollapse] = useState(false);

    const parentRef = React.useRef<HTMLDivElement>(null);

    const boundingWidth =
        parentRef?.current?.getBoundingClientRect().width ?? 0;

    return (
        <div
            className="relative m-auto flex w-full max-w-lg flex-col items-center bg-dark-black-3"
            ref={parentRef}
        >
            {parentRef && (
                <motion.div
                    transition={{
                        duration: animationDuration,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    ref={(ref) => {
                        setHeaderHeight(
                            ref?.getBoundingClientRect().bottom ?? 0
                        );
                    }}
                    className={`fixed top-0 z-10 mx-auto flex w-full items-center justify-between px-4  ${
                        didHeaderCollapse
                            ? "bg-battle-mode-header bg-primary"
                            : ""
                    }`}
                    style={{
                        maxWidth: boundingWidth ? `${boundingWidth}px` : 0,
                    }}
                >
                    <Header />
                </motion.div>
            )}
            <Banner
                headerHeight={headerHeight}
                setDidHeaderCollapse={setDidHeaderCollapse}
                didHeaderCollapse={didHeaderCollapse}
            />
            <div
                className="sticky h-fit w-full flex-grow"
                style={{
                    top: `${headerHeight}px`,
                }}
            >
                <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: -liveGamesFinalYOffset }}
                    transition={{
                        ease: "linear",
                        duration: animationDuration,
                    }}
                    className="shadow-battle-mode relative flex w-full flex-col rounded-t-[20px] bg-dark-blue-1"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export default BattleModeLayout;
