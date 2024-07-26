import img from "../assets/news_img.jpg";

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
      className="card d-inline-block bg-dark text-light mb-3 my-3 mx-5 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : img}
        style={{ height: "200px" }}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 90)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "The garden's petrichor, luminous with the ephemeral ethereal aurora, evoked a halcyon serenity, a quintessential serendipity in solitude."}
        </p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
