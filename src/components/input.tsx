import { PlusCircleIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"



const TodoInput = () => {


    const [value, setValue] = useState<string>('');

    function handleSubmit() {

        
        setValue("")


    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-full gap-5">
                <div className="flex items-center gap-2">
                    <p className="font-medium"> Create a Todo :</p>
                    <Input value={value} className="w-[500px] text-lg placeholder:text-sm" placeholder="Create a playlist for up coming event on....." onChange={e => setValue(e.target.value)} />
                    <Button variant="secondary" onClick={handleSubmit} className="hover:bg-black hover:text-white">
                        <PlusCircleIcon strokeWidth={1.5} />
                    </Button>
                </div>
            </div>
        </>

    )
}

export default TodoInput