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
import { getPublicTrainingsRequest } from "@app/Training/training.utils";
import { TrainingDataType } from "@app/Training/training.types";
import Head from "next/dist/shared/lib/head";
import { CircularProgress } from '@mui/material'


const TrainingSearchInput = ({ value, onChange }: { value: string, onChange: (e: any) => void }) => {
    return (<div className="md:w-[546px] h-[52px] mx-auto relative top-[-25px] z-[3]">
        <input value={value} onChange={onChange} type="text" placeholder="Eğitim Ara" className="w-full h-full border-[#CFD2B7] pl-[48px] rounded-[20px_5px_20px_5px] bg-white-200 font-nexa-bold text-[16px] text-[#949B64]  focus:outline-none" />
        <div className="absolute top-[17px] left-[17px]">
            <SearchIcon />
        </div>
    </div>)
}
const Egitimler = () => {
    const [loading, setLoading] = useState(false)
    const [publicTrainings, setPublicTrainings] = useState<TrainingDataType[]>([])
    const [pageCount, setPageCount] = useState(1)
    let [stopGet, setStopGet] = useState(false)
    const getPublicTrainings = async (page: number) => {
        if (stopGet == true) return;
        setLoading(true)
        getPublicTrainingsRequest(page).then((res: any) => {
            if (res.data.length == 0) setStopGet(true)
            setPublicTrainings(res.data)
            setPageCount(res.pageCount)
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }
    const [trainings, setTrainings] = useState<Array<TrainingCardProps & { Id?: string }>>([])
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
            <Head>
                <title> Eğitimler | Nazan Uysal Harzadın </title>
            </Head>
            <Container className=" h-[300px] md:h-[300px]  !w-full bg-cover bg-no-repeat md:!max-w-full bg-center rounded-br-[120px]  md:bg-cover overflow-clip bg-[url(/images/png/egitimler-bg.png)]">
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

                    }} className="mx-auto md:h-[936px]  px-[20px] md:px-0 scrollbar-thin scrollbar-track-[white]  scrollbar-thumb-quaternary scrollbar-thumb-rounded  h-[700px]  lg:w-[1000px] overflow-auto max-w-[1000px] items-center lg:items-start flex gap-[20px] lg:flex-row flex-col ">

                        {loading && <div className="absolute top-[14%] z-[3] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                            <CircularProgress size={40} />
                        </div>}
                        {
                            (!loading && filteredTrainings.length) === 0 && <div className="flex flex-col w-full  items-center justify-start h-full">
                                <Text className="text-[#949B64] text-[24px] font-nexa-bold">Eğitim bulunamadı</Text>
                            </div>
                        }
                        <div className="flex flex-row flex-wrap items-center md:items-center  md:justify-center h-full gap-[10px]">
                            {
                                filteredTrainings.map((training, index) =>
                                    <div key={v4()} className="min-h-[380px] h-[380px] min-w-[350px]">  <TrainingCard {...training} /></div>)
                            }

                        </div>
                    </div>
                </Container>
            </Container>
        </LandingLayout>
    );
}

export default Egitimler;