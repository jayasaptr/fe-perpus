export const FormCategory = (props) => {
  const { onSubmit, defaultName } = props;

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const data = {
              name: e.target.category.value,
            };
            onSubmit(data);
          }}
        >
          <div className="form-group">
            <label htmlFor="category">Category Name</label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              placeholder="Enter category name"
              defaultValue={defaultName || ""}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
