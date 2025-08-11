import { Link } from "react-router-dom";

export const PageButtons = ({count, active}) => {
    const array = Array.from({length: count});
    return (
        <div className="d-flex flex-row gap-4">
            {array.map((obj, id) => id !== 0 ? <Link to={`/Search/${id}`} key={id}><div className={id === active || (!active && id===1) ? 'text-bg-primary page d-flex justify-content-center align-items-center rounded-1' : 'text-primary border-primary page d-flex justify-content-center align-items-center rounded-1'} style={{height: '40px', width: '40px', fontWeight: '500'}} key={id} >{id}</div></Link> : '')}
        </div>
    )
}