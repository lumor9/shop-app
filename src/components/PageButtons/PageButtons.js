

export const PageButtons = ({count}) => {
    const array = Array.from({length: count});
    return (
        <div className="d-flex flex-row gap-4">
            {array.map((obj, id) => id !== 0 ? <div key={id}>{id}</div> : '')}
        </div>
    )
}