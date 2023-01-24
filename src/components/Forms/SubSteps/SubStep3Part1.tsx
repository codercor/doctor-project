import {Add} from "@mui/icons-material";
import React from "react";
import FormInput, {FormInputTextArea} from "../FormInput/FormInput";
import FormInputSelectOne from "../FormInput/FormInputSelectOne";
import FormInputSelectMulti from "../FormInput/FormInputSelectMulti";

const EH = [
    {value: "evet", label: "Evet"},
    {value: "hayır", label: "Hayır"},
]

let diet = [
    {value: "vejetaryan", label: "Vejetaryan"},
    {value: "vegan", label: "Vegan"},
    {value: "alergi", label: "Alerji"},
    {value: "eliminasyon", label: "Eliminasyon"},
    {value: "kan grubu", label: "Kan grubu"},
    {value: "dusuk sodyum", label: "Düşük sodyum"},
    {value: "mandira yok", label: "Mandıra yok"},
    {value: "bugday yok", label: "Buğday yok"},
    {value: "glutensiz", label: "Glutensiz"},
    {value: "dusuk yagli", label: "Düşük yağlı"},
    {value: "dusuk karbonhidratli", label: "Düşük karbonhidratlı"},
    {value: "yuksek proteinli", label: "Yüksek Proteinli"},
    {value: "diğer", label: "Diğer"},
]

export default function SubStep3Part1({
                                          errors,
                                          values,
                                          handleChange,
                                          setFieldValue
                                      }: {
                                          errors: any;
                                          values: any;
                                          handleChange: any;
                                          setFieldValue: any;
                                      }
) {

    return (
        <>
            
        
        </>
    );
}
