import React from "react";

const Rupee = ({ className }: { className?: string }) => {
    return (
        <span className={`font-basement-grotesque ${className ?? ""}`}>&#8377;</span>
    );
};

export default Rupee;
