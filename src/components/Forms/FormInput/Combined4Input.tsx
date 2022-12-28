import { Add, Delete } from "@mui/icons-material";
import { v4 } from "uuid";
import FormInput, { FormInputSelect } from "./FormInput";
import FormInputSelectOne from "./FormInputSelectOne";


interface Item {
    name: string;
    error?: string;
    value?: string;
}

/*
 {values.items.map((item, index) => (
           <div key={index}>
             <Field name={`items.${index}.field1`} />
             <ErrorMessage name={`items.${index}.field1`} component="div" />
             <Field name={`items.${index}.field2`} />
             <ErrorMessage name={`items.${index}.field2`} component="div" />
             <Field name={`items.${index}.field3`} />
             <ErrorMessage name={`items.${index}.field3`} component="div" />
             <Field name={`items.${index}.field4`} />
             <ErrorMessage name={`items.${index}.field4`} component="div" />
           </div>
         ))}
         // write reusable component
*/
type Option = { value: string; label: string }
const Combined4Input = ({
    values,
    errors,
    labels,
    name,
    fieldNames,
    handleChange,
    options1,
    options2,
    setFieldValue,
}: {
    errors: any;
    values: any;
    fieldNames: string[];
    labels: string[];
    name: string;
    handleChange: any;
    options1: Option[];
    options2: Option[];
    setFieldValue: any;

}) => {

    let valuesKey = `values.${name}`;
    let errorsKey = `errors.${name}`.replaceAll(".", "?.")
    let _values = eval(valuesKey);
    let _errors = eval(errorsKey);
    const addItem = () => {
        setFieldValue(
            name,
            [
                ..._values, {
                    [fieldNames[0]]: "",
                    [fieldNames[1]]: "",
                    [fieldNames[2]]: "",
                    [fieldNames[3]]: "",
                }
            ]
        );
    };

    const removeItem = (index: number) => {
        let deleted = _values.filter((item: Item, i: number) => i !== index);
        setFieldValue(name, deleted);
    };
    console.log("values", values.subStep2);


    return <>
        <div className="flex w-full flex-col ">
            {
                _values.length < 1 &&
                <div className="w-full flex items-center justify-center">
                    <h3> Kayıt eklemek için ekleye tıklayın </h3>
                </div>
            }
            {
                eval(`values.${name}`).map((item: Item, index: number) => (
                    <div key={index} className="flex min-w-full gap-[20px] w-full justify-between">
                        <div className="flex-[2]">
                            <FormInput
                                name={`${name}[${index}].${fieldNames[0]}`}
                                label={labels[0]}
                                value={_values[index][fieldNames[0]]}
                                error={(_errors && _errors[index]) && _errors[index][fieldNames[0]]}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex-[2]">
                            <FormInputSelect
                                name={`${name}[${index}].${fieldNames[1]}`}
                                label={labels[1]}
                                value={_values[index][fieldNames[1]]}
                                error={(_errors && _errors[index]) && _errors[index][fieldNames[1]]}
                                options={options1}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex-[2]">
                            <FormInput
                                name={`${name}[${index}].${fieldNames[2]}`}
                                label={labels[2]}
                                value={_values[index][fieldNames[2]]}
                                error={(_errors && _errors[index]) && _errors[index][fieldNames[2]]}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex-[2]">
                            <FormInputSelect
                                name={`${name}[${index}].${fieldNames[3]}`}
                                label={labels[3]}
                                value={_values[index][fieldNames[3]]}
                                error={(_errors && _errors[index]) && _errors[index][fieldNames[3]]}
                                options={options2}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex-1 flex items-center justify-center">

                            <button className="bg-primary rounded-[20px_5px] px-[25px] py-[10px] text-red-400" onClick={() => removeItem(index)}>
                                <Delete />
                            </button>
                        </div>

                    </div>
                ))
            }
            <button onClick={() => addItem()} className="px-[20px] py-[10px] bg-green-200 text-[white] mt-[10px] w-fit self-center rounded-[5px_5px]">
                <Add />
                <span> Ekle </span>
            </button>
        </div>
    </>
}

export default Combined4Input;
