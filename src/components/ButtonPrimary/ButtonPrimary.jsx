
import './ButtonPrimary.css'

function ButtonPrimary({ children,onClick }) {

    return (

        <button onClick={onClick} className='btn-primary'> {children}</button>


    )
}
export default ButtonPrimary