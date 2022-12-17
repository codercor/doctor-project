const ComponentHeading = ({ main, sub }: { main: string, sub: string }) => {
    return <div className="flex flex-col w-full leading-none gap-[10px]">
        <h1 className='text-[#4D5628] font-nexa-bold text-[20px]'> {main} </h1>
        <p className="font-nexa-regular text-[16px]"> {sub} </p>
    </div>
}
export default ComponentHeading