import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import { useEffect, useRef } from "react";

const FloatingImages = ({ images, to = "right" }: { images: Array<String>, to: "left" | "right" }) => {
    const ref = useRef(null);
    useEffect(() => {
        const el: any = ref.current;
        setInterval(() => {
            // en sona kadar scroll olduğunda başa dönüyor
            if (to === "right") {
                if (Math.round(el.scrollLeft) >= el.scrollWidth - el.clientWidth) {
                    el.scrollLeft = 0;
                } else {

                    el.scrollLeft += 2;

                }
            } else {
                if (Math.round(el.scrollLeft) <= 0) {
                    el.scrollLeft = el.scrollWidth - el.clientWidth;
                } else {
                    el.scrollLeft -= 1.5;
                }
            }
        }, 50)
    }, []);
    return (
        <div ref={ref} className="scrollbar-none overflow-x-auto h-full w-full flex gap-[20px]">
            {
                images.map((image, index) => (
                    <div key={uuidv4()} className="h-full min-w-[450px] relative">
                        <Image src={"/images/png/" + image} layout="fill" objectFit="contain" />
                    </div>))
            }

        </div>
    );
}

export default FloatingImages;