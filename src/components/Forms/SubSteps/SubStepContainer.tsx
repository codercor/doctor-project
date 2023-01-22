import React from "react";

const SubstepViever = ({subSteps, activeSubStep}: { subSteps: any, activeSubStep: number }) => {
    return <>
        {subSteps[activeSubStep]}
    </>
}

export default SubstepViever