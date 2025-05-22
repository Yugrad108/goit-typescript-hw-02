import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./services/api";
import { Toaster } from "react-hot-toast";
import Image from "./types/Image";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleSearch = async (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError("");
  };

  useEffect(() => {
    if (!query) return;

    const fetchImagesData = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await fetchImages(query, page);

        if (data.results.length === 0) {
          setError("Images not found. Try again!");
        }

        setImages((prevImages) => {
          return page === 1 ? data.results : [...prevImages, ...data.results];
        });
        setLoadMore(+data.total > page * 12);
        setTotalPages(Math.ceil(+data.total / 12));
      } catch (error) {
        if (error) {
          setError("Ooops something went wrong!");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchImagesData();
  }, [query, page]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  function openModal(image: Image): void {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  function closeModal(): void {
    setSelectedImage(null);
    setModalIsOpen(false);
  }

  return (
    <>
      <div>
        <h1>Gallery</h1>
        <SearchBar onSearch={handleSearch} />
        <Toaster position="bottom-right" reverseOrder={false} />
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {loading && <Loader loading={loading} />}
        {error && <ErrorMessage error={error} />}
        {loadMore && !loading && (
          <LoadMoreBtn
            onClick={loadMoreImages}
            totalPages={totalPages}
            page={page}
          />
        )}
        {modalIsOpen && (
          <ImageModal image={selectedImage} closeModal={closeModal} />
        )}
      </div>
    </>
  );
}

export default App;
