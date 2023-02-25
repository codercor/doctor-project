"use client";

import TrainingCard, { TrainingCardProps } from "@components/Card/TrainingCard";
import Container from "@components/Container";
import Footer from "@components/Footer";
import SearchIcon from "@components/Icon/SearchIcon";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";
import Text from "@components/Text";
import { v4 } from 'uuid'
import { useMediaQuery } from 'react-responsive'
import React, { useEffect, useState } from "react";
import LandingLayout from "@components/Layouts/LandingLayout";
import useTraining from "src/hooks/training.hook";


const TrainingSearchInput = ({ value, onChange }: { value: string, onChange: (e: any) => void }) => {
    return (<div className="md:w-[546px] h-[52px] mx-auto relative top-[-25px] z-[3]">
        <input value={value} onChange={onChange} type="text" placeholder="Eğitim Ara" className="w-full h-full pl-[48px] rounded-[20px_5px_20px_5px] bg-white-200 font-nexa-bold text-[16px] text-[#949B64] focus:outline-none" />
        <div className="absolute top-[17px] left-[17px]">
            <SearchIcon />
        </div>
    </div>)
}
const Egitimler = () => {
    const { publicTrainingsProcess: { loading }, getPublicTrainings, publicTrainings } = useTraining()

    const [trainings, setTrainings] = useState<Array<TrainingCardProps & { Id?: string }>>([
    ])
    const [page, setPage] = useState(1);
    useEffect(() => {
        getPublicTrainings(page)
    }, [page])
    console.log("loading", loading, publicTrainings);

    useEffect(() => {
        if (!loading && publicTrainings.length > 0) {
            let newTrainings = publicTrainings.map((t, i) => {
                return {
                    ...t,
                    image: t.Image as string || '',
                    title: t.Name as string || '',
                    description: t.Details as string || '',
                    price: t.Price, // (t.Price * ((100 - t.DiscountRate) / 100)).toFixed(1).toString()
                    detailHref: `/training?id=${t.Id}`,
                    Id: t.Id,
                    DiscountRate: t.DiscountRate
                }
            });
            let temps = [...trainings];
            //push newTrainings elements to temps if not exist by Id
            newTrainings.forEach((t) => {
                if (!temps.find((temp) => temp.Id === t.Id)) {
                    //@ts-ignore
                    temps.push(t);
                }
            })
            //@ts-ignore
            setTrainings([...temps])
        }
    }, [loading, page, publicTrainings.length])

    const [filteredTrainings, setFilteredTrainings] = useState(trainings)

    const [search, setSearch] = useState('')


    useEffect(() => {
        if (search.length > 0) setFilteredTrainings(trainings.filter(t => t.title.toLowerCase().includes(search.toLowerCase())))
        else setFilteredTrainings(trainings)
    }, [search, trainings])

    return (
        <LandingLayout>
            <Container className=" h-[300px] md:h-[300px]  !w-full bg-cover bg-no-repeat md:!max-w-full bg-center rounded-br-[120px]  md:bg-cover overflow-clip bg-[url(/images/png/best.png)]">
                <Container className="grid  place-items-end !min-w-full backdrop-brightness-50   justify-center  pb-20 md:pb-22 h-full">
                    <Text className="text-[#F2F2F2] text-[24px] md:text-[34px] font-nexa-bold">Eğitimler</Text>
                </Container>
            </Container>
            <Container className=" md:min-h-[1135px] pb-10  !min-w-full bg-[white] ">
                <Container className="md:!max-w-[1455px] min-h-full bg-no-repeat bg-[position:100%_25%] bg-[white] md:bg-[url(/images/png/bogurtlen-cilek.png)]">
                    <TrainingSearchInput value={search} onChange={(e) => { setSearch(e.target.value) }} />
                    <div onScroll={(e: any) => {
                        //when scroll is at the bottom of the div
                        console.log(Math.floor(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight);

                        if (Math.floor(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight) {
                            setPage(page + 1)
                        }

                    }} className="mx-auto md:h-[936px] px-[20px] md:px-0 scrollbar-thin scrollbar-track-[white]  scrollbar-thumb-quaternary scrollbar-thumb-rounded  h-[700px]  md:w-[1000px] overflow-auto max-w-[1000px] items-center md:items-start flex gap-[20px] md:flex-row flex-col ">
                        <div className="flex flex-col items-center md:items-start md:justify-between h-full gap-[20px]">
                            {
                                filteredTrainings.filter((_, i) => i % 2 == 0).map((training, index) =>
                                    <TrainingCard {...training} key={v4()} />)
                            }
                        </div>
                        <div className="flex flex-col items-center md:items-start md:justify-between h-full gap-[20px]">
                            {
                                filteredTrainings.filter((_, i) => i % 2 == 1).map((training, index) =>
                                    <TrainingCard {...training} key={v4()} />)
                            }
                        </div>
                    </div>
                </Container>
            </Container>
        </LandingLayout>
    );
}

export default Egitimler;