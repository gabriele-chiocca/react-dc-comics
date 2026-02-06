export default function ComicsCard({ comics }) {
  return (
    <div className="bg-dark py-4">
      <div className="container relative">
        <span className="bg-primary text-light p-3 h5 absolute">
          CURRENT SERIES
        </span>

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
                  <p className="text-light h5 align-title-comics">
                    {comic.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center pb-4">
        <button className="btn btn-primary">LOAD MORE</button>
      </div>
    </div>
  );
}
