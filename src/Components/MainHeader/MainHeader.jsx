
const MainHeader = ({ title, subTitle }) => {
    return (
        <>
            <div className='mainHeader mb-5'>
                <h5 className="title fs-1 fw-bold">{title}</h5>
                <h5 className="subTitle fs-6 text-capitalize">{subTitle}</h5>
                <span className="line mt-5"></span>
            </div>
        </>
    )
}

export default MainHeader
