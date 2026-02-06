export default function ProductCard({ thumb, title }) {
  return (
    <div className="row">
      {comics.map((comic) => {
        return (
          <div key={comic.id} className="col-lg-2 col-md-4 col-6">
            <div className="my-4">
              <div className="img-wrapper">
                <img
                  className="img-fluid comic-img"
                  src={comic.thumb}
                  alt={comic.title}
                />
              </div>
              <p className="text-light h5 align-title-comics">{comic.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
