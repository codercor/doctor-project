import Image from "next/image";
import Router from 'next/router'
const Logo = ({ logo = "v1" }) => {
    return (<>
        {logo == "v1" && <div onClick={()=>Router.push('/')} className="bg-primary-light  md:w-[140px] w-[90px] rounded-bl-[5px] relative rounded-br-[5px] md:h-[183px] h-[117px]" >
            <Image src={`/images/png/logo1.png`} alt="image" layout='fill' objectFit="contain" />
        </div >}
        {logo == "v2" && <div onClick={()=>Router.push('/')} className="bg-primary-light  md:w-[140px] w-[90px] rounded-bl-[5px] relative rounded-br-[5px] md:h-[183px] h-[117px]" >
            <Image src={`/images/svg/brandmark2.svg`} alt="image" layout='fill' objectFit="contain" />
        </div >}
    </>
    );
}

export default Logo;