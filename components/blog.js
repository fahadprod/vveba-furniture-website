export default function Blog() {
  const articles = [
    { id: 1, number: "01", text: "Lorem ipsum dolor sit amet" },
    { id: 2, number: "02", text: "Lorem ipsum dolor sit amet" },
    { id: 3, number: "03", text: "Lorem ipsum dolor sit amet" }
  ];

  return (
    <section className="blog">
      <div className="blog-content">
        <div className="blog-top">
          <div className="magazine">
            <img src="/images/magazine.png" alt="Magazine" />
          </div>
          <div className="trends">
            <h1>WINTER TRENDS 2023</h1>
            <button>DOWNLOAD</button>
          </div>
        </div>
        <div className="blog-articles">
          {articles.map(article => (
            <div key={article.id} className="article">
              <span>{article.number}</span>
              <span>{article.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}