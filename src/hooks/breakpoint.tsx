import create from "@kodingdotninja/use-tailwind-breakpoint";
import { useMediaQuery } from "react-responsive";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config";

const config = resolveConfig(tailwindConfig);
// @ts-ignore
export const { useBreakpoint } = create(config.theme.screens);


export const useIsDesktop = () => {
    return useMediaQuery({
        query: '(min-width: 1224px)'
    })
} 