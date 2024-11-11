import { Input } from '@mui/material';
import {useMemo} from "react";


// Custom Hook that uses useMemo react hook
export const useCustomInput = () => {
    const styling = useMemo(() => ({
        border: '1px solid orange',
        borderRadius: '10px',
        backgroundColor: 'orange',
        color: 'black',
        padding: '2%',
        fontFamily: 'Arial, Helvetica, sans-serif'
    }), []);

    return styling;
};

export default function CustomInput(){
    // make sure to call the custom hook here
    const styling = useCustomInput();
    return(
        <Input
            /*PART 1: Overiding the tag rendering*/
            /*placeholder prop that allows temporary text to be displayed*/
            placeholder={"Enter Text Here"}
            /*slots prop which adds style to parent and makes the input a main tag*/
            slots={{root: 'main'}}

            /*PART 2: Overiding the Styling w the Custom Hook */
            slotProps={{
                root: {
                    style: styling

                }
            }}
        />


    )
};