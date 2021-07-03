import React , {useState} from 'react';

const Count = () => {

    const [data,setdata] = useState(0);

    return (
        <>
            <section>
                <div className="show my-3 h-50 d-flex jutify-content-center align-items-center">
                    <span>{data}</span>
                </div>
                <div className="h-50">
                    <button onClick={()=> setdata(data + 1)} className="btn btn-primary">Increment</button>
                    <button onClick={()=> data > 0 ? setdata(data - 1) : alert(' Number Is Unavailable')} className="btn btn-success mx-3">Decrement</button>
                </div>
            </section>
        </>
    )
}

export default Count;
