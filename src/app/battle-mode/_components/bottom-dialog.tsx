import React, { type Dispatch, type SetStateAction } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { getCloudfareUrl } from "@/utils";

export type BottomDialogProps = {
    children: React.ReactNode;
    open: boolean;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    onClose: () => void;
    dialogContentClassName?: string;
    hideCloseImage?: boolean;
    dataTestID?: string;
};

const BottomDialog = ({
    children,
    open,
    onClose,
    dialogContentClassName = "",
    hideCloseImage = false,
    dataTestID = "close-result-dialog",
}: BottomDialogProps) => {
    return (
        <Dialog.Root open={open}>
            <Dialog.Portal>
                <Dialog.Overlay />
                <div className="max-w-screen-w bg-modal-2 fixed bottom-0 left-0 right-0 top-0 z-[99] mx-auto w-full backdrop-blur-sm">
                    <div className="absolute bottom-0 left-0 right-0">
                        {!hideCloseImage && (
                            <div className="pointer-events-auto mb-4 flex items-center justify-center">
                                <Dialog.Close asChild>
                                    <button
                                        aria-label="Close"
                                        onClick={onClose}
                                    >
                                        <img
                                            src={getCloudfareUrl("icons/Close")}
                                            alt="close-image"
                                            height={40}
                                            width={40}
                                            draggable={false}
                                            className="cursor-pointer"
                                            data-testid={dataTestID}
                                        />
                                    </button>
                                </Dialog.Close>
                            </div>
                        )}
                        <Dialog.Content
                            className={`DialogContent rounded-t-5xl bg-dark-blue-3 w-full p-6 outline-none ${
                                dialogContentClassName || ""
                            }`}
                        >
                            {children}
                        </Dialog.Content>
                    </div>
                </div>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default BottomDialog;
