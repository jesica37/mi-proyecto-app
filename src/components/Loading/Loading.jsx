
import './Loading.css'
import { ClipLoader } from "react-spinners";


export default function Loading({ loading }) {

    return (
        <div className="loading">
            <ClipLoader
                color="black"
                loading={loading}

                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}