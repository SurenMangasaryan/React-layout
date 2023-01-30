import React from "react";
import SecondMainFirstBlock from "./SecondMainFirstBlock";
import SecondMainSecondBlock from "./SecondMainSecondBlock";
import SecondMainThirdBlock from "./SecondMainThirdBlock";

export default function SecondMain() {
    return (
        <div className="second-main">
            <SecondMainFirstBlock />
            <SecondMainSecondBlock />
            <SecondMainThirdBlock />
        </div>
    );
}