interface props {
  count: number;
  total: number;
}

export default function Counter({ count, total }: props) {
  return (
    <>
      <div className="d-flex flex-column align-items-end ">
        <div style={{ textAlign: "center" }}>
          <div
            className="progress"
            role="progressbar"
            style={{ width: 80 }}
            aria-label="Animated striped example"
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{
                width: `${(count / total) * 100}%`,
                transition: "width .3s ease-in-out !important",
              }}
            ></div>
          </div>
          <div className="">
            <p className="fs-6">
              {count}/{total}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
