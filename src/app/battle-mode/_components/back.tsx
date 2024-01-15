import React from "react";
import { useRouter } from "next/navigation";
import { getCloudfareUrl } from "@/utils";

const Back = ({
    imgParentDivClassName = "",
    isPrev = false,
    src = getCloudfareUrl("icons/arrow-back"),
    isRequiredDefaultStyle = true,
    dataTestID = "back-button",
    onClick,
}: {
    imgParentDivClassName?: string;
    isPrev?: boolean;
    src?: string;
    isRequiredDefaultStyle?: boolean;
    dataTestID?: string;
    onClick?: (fallback: () => void) => void;
}) => {
    const router = useRouter();

    const fallback = () => {
        if (window.history && window.history.length > 2 && isPrev) {
            router.back();

            return;
        }

       router.push("/");
    };

    return (
        <div
            className={`${
                isRequiredDefaultStyle
                    ? "mx-auto mt-4 w-full max-w-95/100 bg-transparent"
                    : ""
            } ${imgParentDivClassName}`}
        >
            <img
                alt="arrow-left"
                onClick={() => {
                    if (onClick) {
                        onClick(fallback);
                    } else {
                        fallback();
                    }
                }}
                src={src}
                height={28}
                width={28}
                className="cursor-pointer"
                data-testid={dataTestID}
            />
        </div>
    );
};

export default Back;
