const MainHeader = ({ title, subTitle }) => {
  return (
    <>
      <div className="mainHeader text-center text-lg-start mb-5">
        <h1 className="title fs-1 fw-bold">{title}</h1>
        <h6 className="subTitle fs-6 text-capitalize">{subTitle}</h6>
        <span className="line"></span>
      </div>
    </>
  );
};

export default MainHeader;
