const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const handleNextPage = () => {
        if(page === lastPage) {
            return
        }
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        if(page === 1) {
            return
        }
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="text-2xl flex justify-center items-center py-6 px-2 gap-4 text-color-primary">
            {page === 1 ? null : 
                <button 
                onClick={handlePrevPage} 
                className="transition-all hover:text-color-accent"
                >
                    Prev
                </button>
            }
            <p>{page} of {lastPage}</p>
            {page === lastPage ? null : 
                <button 
                    onClick={handleNextPage} 
                    className="transition-all hover:text-color-accent"
                >
                    Next
                </button>
            }
        </div>
    )
}

export default Pagination