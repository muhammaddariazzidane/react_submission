export default function LoadingDetail() {
  return (
    <div className="placeholder-glow ">
      <span
        className="placeholder col-10 placeholder-lg rounded-2"
        style={{ height: '3.5rem' }}
      ></span>
      <span className="placeholder col-12 mt-2 rounded-2"></span>
      <div className="d-flex justify-content-end gap-2 pt-5">
        <span className="placeholder col-1 rounded-2"></span>
        <span className="placeholder col-1 rounded-2"></span>
      </div>
    </div>
  );
}
