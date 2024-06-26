import Select from "react-select";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllCategory } from "../../services/data/category";
import { useEffect, useState } from "react";
export const FormBook = (props) => {
  const {
    onSubmit,
    defaultName,
    defaultStock,
    defaultPublicationYear,
    defaultCategory,
    defaultImage,
  } = props;
  console.log("🚀 ~ FormBook ~ defaultCategory:", defaultCategory);

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [bookImage, setBookImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBookImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await getAllCategory({ pagination: 10, page });
      console.log("🚀 ~ fetchCategory ~ response", response.data.data);
      setCategories([...categories, ...response.data.data]);
      setHasMore(response.data.data.length > 0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form);
          if (category == null) {
            formData.append("category_id", defaultCategory.id);
          } else {
            formData.append("category_id", category);
          }

          onSubmit(formData);
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Nama Buku</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Masukkan nama buku"
            defaultValue={defaultName || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            placeholder="Masukkan stock"
            defaultValue={defaultStock || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="publication_year">Tahun Terbit</label>
          {/* calender */}
          <input
            type="date"
            className="form-control"
            id="publication_year"
            name="publication_year"
            defaultValue={defaultPublicationYear || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category : {defaultCategory.name}</label>
          <Select
            options={categories.map((category) => ({
              value: category.id,
              label: category.name,
            }))}
            defaultValue={{
              value: 1,
              label: defaultCategory.name,
            }}
            onChange={(e) => setCategory(e.value)}
            components={
              <InfiniteScroll
                dataLength={categories.length}
                next={() => setPage(page + 1)}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                height={200}
              />
            }
          />
        </div>
        <div className="form-group d-flex flex-column gap-4">
          <label htmlFor="image">Image</label>
          {/* showImage jika ada defaultImage atau preview  */}
          {(defaultImage || previewImage) && (
            <img
              src={previewImage || defaultImage}
              alt="preview"
              className="mb-2"
              style={{ width: "100px" }}
            />
          )}
          <input
            type="file"
            className="form-control-file"
            id="image"
            name="image"
            onChange={handleImageChange}
            defaultValue={defaultImage || ""}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
