
import { UserState } from '@app/User/user.types'
import FormInput from '@components/Forms/FormInput/FormInput'
import request from '@config'
import { Cancel } from '@mui/icons-material'
import React, { useEffect } from 'react'

type Props = {
    url: string,
    _key: string,
    selected: any,
    setKey: (key: string) => void,
    setSelected: (result: any) => void,
}

const Search = (props: Props) => {
    const { url, _key, selected, setSelected, setKey } = props

    const [results, setResults] = React.useState<any>([])


    const getResults = async () => {
        console.log(_key);

        if (!_key || _key.trim() == "") return setResults([])
        console.log("key", _key);

        const result = await request.post(url, {
            key: _key,
        })
        setResults(result.data)
        return result
    }
    useEffect(() => {
        getResults();
    }, [_key]);

    return (
        <div className="">

            {
                selected ? <UserResultsItem actions={{
                    setSelected
                }} item={selected} cancel /> : <> <FormInput placeholder='Kullanıcı arayın' type="text" value={_key} onChange={(e) => setKey(e.currentTarget.value)} />
                    {results.length > 0 && <UserResults actions={{
                        setSelected
                    }} results={results} />}
                </>
            }
        </div>
    )
}
export default Search

const UserResultsItem = ({ item, cancel = false, actions }: { item: UserState, cancel?: boolean, actions: any }) => {
    return (
        <div onClick={() => {
            actions.setSelected(item)
        }} className="w-full  h-[40px]  flex items-center px-4">
            <p>
                {item.Information.Fullname}
            </p>
            {
                cancel && (<button onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                    e.stopPropagation();
                    actions.setSelected(null)

                }} className="ml-auto">
                    <Cancel />
                </button>)
            }
        </div>
    )
}

const UserResults = ({ results, actions }: { results: any[], actions: any }) => {
    return (<div className="w-full max-h-[100px] scrollbar-thumb-black-200 overflow-scroll scrollbar-track-slate-50 scrollbar-thin absolute  z-[99] bg-[white] left-0 border-[#4E929D]-500 border-2">
        {results.map((item, index) => <UserResultsItem actions={actions} key={index} item={item} />)}
    </div>)
}