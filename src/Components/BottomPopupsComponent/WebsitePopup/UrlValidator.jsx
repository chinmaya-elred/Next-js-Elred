
import { useEffect, useState } from "react"
import urlExist from "url-exist"
export const UrlValidator = ({ url }) => {
const[isValid,setNotIsvalid]=useState(false)
    useEffect(()=>{
        urlExist(url).then((res) => {
            setNotIsvalid(res)
        }).catch((e) => {
            setNotIsvalid(false)
        })
    },[])
    // const urlExistFunction = () => {
    //     let isValid = 
    //     console.log(isValid, "isValid")
    //     return isValid
    // }
    // return urlExistFunction();
    console.log(isValid,"isValid")
    return isValid;
}

export default UrlValidator
