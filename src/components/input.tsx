import { PlusCircleIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "./ui/checkbox"


const todo: { title: string, status: boolean, createdAt: string }[] = [
    {
        title: "Hello this is something big",
        status: true,
        createdAt: "01-02-2023"
    },
    {
        title: "Good things to do takes good time",
        status: false,
        createdAt: "04-01-2024"
    },
]



const TodoInput = () => {


    const [value, setValue] = useState<string>('');
    const [todos, setTodos] = useState(todo)
    const [isComplete, setComplete] = useState(false)

    function handleSubmit() {

        const date = new Date;
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay()

        todo.push({
            title: value,
            status: isComplete,
            createdAt: `${day}-${month}-${year}`
        })
        setTodos(todo)



        setValue("")


    }
    function handleClick() {
        setComplete(true)

    }

    return (
        <>
            <div>
                <div className="flex items-center justify-center h-full m-32 text-4xl font-extrabold uppercase">
                    Simple - Todo
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 mt-24 mb-32">
                <div className="flex items-center gap-2">
                    <p className="font-medium"> Create a Todo :</p>
                    <Input value={value} className="w-[500px] text-lg placeholder:text-sm" placeholder="Create a playlist for up coming event on....." onChange={e => setValue(e.target.value)} />
                    <Button variant="secondary" onClick={handleSubmit} className="hover:bg-black hover:text-white">
                        <PlusCircleIcon strokeWidth={1.5} />
                    </Button>

                </div>
            </div>
            <div>
                <Table className="w-1/3 mx-auto ">
                    <TableCaption>A list of your recent todos.</TableCaption>
                    <TableHeader>
                        <TableRow  >
                            <TableHead className="text-center">SI.No</TableHead>
                            <TableHead className="text-center">Status</TableHead>
                            <TableHead className="text-center">Todo List</TableHead>
                            <TableHead className="text-center">Completed?</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {todos.map((item, index) => (
                            <TableRow className="text-center">
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell >{item.status ? <p className="font-medium bg-green-200 rounded-lg"> Completed </p> : <p className="font-medium bg-red-200 rounded-lg"> Pending </p>}</TableCell>
                                <TableCell className="text-left">{item.title}</TableCell>
                                <TableCell >{item.status ? <Checkbox className="text-center" disabled /> : <Checkbox className="text-center" onClick={handleClick} />}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>

            </div>
        </>

    )
}

export default TodoInput


