import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/action";
import { v4 as uuid} from "uuid";

export const TodoInput = () => {

    const [ title, setTitle] = useState("");

    const dispatch = useDispatch()

    const handleAdd = () => {
        const payload = {
            title,
            status:false,
            id:uuid()
        }
        dispatch(addTodo(payload))
    }
    return (
        <div>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <button onClick={handleAdd} >ADD</button>
        </div>
    )
}