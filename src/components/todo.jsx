import { useParams } from "react-router-dom";


const Todo = () => {

    const {id} = useParams();


    return(
        <div>
            <center><h1>Todo Details</h1></center>
            
        </div>
    )
}

export default Todo;