export function SalesBox({ data, like, setLike }) {
    console.log(data);

    const handleClick = (event) => {
        data.buttonVal === "View options" ? alert("item disabled") :
            setLike(like + 1);
    };
    //event.currentTarget.disabled = true
    return (

        <div className='sales-box-container'>
            <div className='sales-item'>
                <div className='image-label'>
                    <img src={data.imageSrc} class="sales-img" alt={data.name} />
                    {data.name === "Sale Item" || data.name === "Special Item" ? <sup><label width="100" className="label-sale">{" "}sale{" "}</label></sup> : null}
                </div>
                <p className='sales-item-name'>{data.name}</p>
                <p><strike>{data.price1}</strike>{" "}{data.price}</p>
                {data.stars !== null ? <p>{data.stars}</p> : <div> <br /></div>}
                {/* <p>{data.stars}</p> */}

            </div>
            <div className='button-bar'>
                <button onClick={handleClick}>{data.buttonVal}</button>
            </div>
        </div>

    );
}
