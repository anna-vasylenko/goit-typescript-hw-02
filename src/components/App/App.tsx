import React, { useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";

import { fetchImages } from "../../services/api";
import { Photo } from "../../services/api.types";
import { ModalContent } from "./App.types";

const initialModalContent: ModalContent = {
  description: "",
  likes: 0,
  url: "",
  user: "",
  userPhoto: "",
};

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [modalContent, setModalContent] =
    useState<ModalContent>(initialModalContent);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);

        if (!data.results.length) {
          setIsEmpty(true);
          return;
        }
        setImages((prev) => [...prev, ...data.results]);
        setShowLoadMore(page < data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearchSubmit = (searchValue: string): void => {
    setImages([]);
    setPage(1);
    setQuery(searchValue);
    setShowLoadMore(false);
    setIsError(false);
    setIsEmpty(false);
  };

  const handleClick = (): void => {
    setPage((prev) => prev + 1);
  };

  const closeModal = (): void => {
    setModalContent(initialModalContent);
    setIsOpenModal(false);
  };

  const openModal = (content: ModalContent): void => {
    setModalContent(content);
    setIsOpenModal(true);
  };

  return (
    <>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      <ImageGallery images={images} handleOpenModal={openModal} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage text={"Something went wrong!"} />}
      {isEmpty && (
        <ErrorMessage
          text={
            "Sorry, there are no images matching your search query. Please try again!"
          }
        />
      )}
      {showLoadMore && <LoadMoreBtn handleClick={handleClick} />}
      <ImageModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        {...modalContent}
      />
    </>
  );
};

export default App;
