import { useSelector } from "react-redux"
import Link

export const TodoList =() => {

    const {todos} = useSelector((state) => state)

    console.log(todos);


    return (
        <div>
            {
                todos.map((todo)=>{
                    <Link></Link>
                })
            }
        </div>
    )
}