import img_cover from '../../Assests/Images/dashboard/top_wrapper.jpg';
const TopWrapper  = () => {
  return (
    <div className="top-wrapper">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-6">
          <img src={img_cover} width="100%" alt="wrapper"/>
        </div>
        <div className="col-12 col-md-6">
          <div className="tw-about text-center">
            <p className="tw-heading">
              Agri Supply Chain🚛 
            </p>
            <p className="tw-sub-heading">
              Blockchain based Agriculture Supply
              Chain System
            </p>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  ) 
}
export default TopWrapper;