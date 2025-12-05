
import { useState } from "react"
function useCount({ inicial = 1, stock }) {

    const [count, setCount] = useState(inicial)

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    return {
        
        count,
        restar,
        sumar
        
    }
}
export default useCount