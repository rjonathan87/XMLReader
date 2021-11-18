export const Login = () => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-header">Login</div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input placeholder"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input placeholder"
            />
          </div>
        </div>
      </div>
    </>
  );
};
