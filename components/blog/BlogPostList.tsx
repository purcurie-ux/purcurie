interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  publishDate: string;
  imageUrl: string;
  imageUrl500: string;
  imageSizes: string;
}

interface BlogPostListProps {
  posts: BlogPost[];
  currentPage?: number;
  hasNextPage?: boolean;
}

export default function BlogPostList({
  posts,
  currentPage = 1,
  hasNextPage = false,
}: BlogPostListProps) {
  const imageStyle = {
    WebkitTransform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    MozTransform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    msTransform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    transform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
  };

  const arrowStyle = {
    WebkitTransform:
      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    MozTransform:
      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    msTransform:
      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    transform:
      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
  };

  return (
    <div className="page-wrap">
      <section className="post">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-dyn-list">
            <div role="list" className="post-list w-dyn-items">
              {posts.map((post) => (
                <div
                  key={post.id}
                  role="listitem"
                  className="post-item w-dyn-item"
                >
                  <a
                    data-w-id="ebd6d6f7-9e99-4308-7141-35a1ad9bd5d5"
                    style={{ borderColor: "rgba(0,0,0,0.1)" }}
                    href={`/blog-posts/${post.slug}`}
                    className="post-block w-inline-block"
                  >
                    <div className="mobile-none">
                      <div className="post-text">Published</div>
                      <div className="body-small">{post.publishDate}</div>
                    </div>
                    <div className="post-warp">
                      <div className="post-img">
                        <img
                          src={post.imageUrl}
                          loading="lazy"
                          style={imageStyle}
                          alt="Post Image"
                          sizes={post.imageSizes}
                          srcSet={`${post.imageUrl500} 500w, ${post.imageUrl} 744w`}
                          className="post-image"
                        />
                      </div>
                      <div className="post-right">
                        <h3 className="post-heading">{post.title}</h3>
                        <div className="author-info">
                          <div className="post-text">Author</div>
                          <div className="body-small">{post.author}</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            {hasNextPage && (
              <div
                role="navigation"
                aria-label="List"
                className="w-pagination-wrapper pagination"
              >
                <a
                  data-w-id="16c1344a-f37f-07f1-3ac8-616551e7fadb"
                  href={`?0dd9f9bb_page=${currentPage + 1}`}
                  aria-label="Next Page"
                  className="w-pagination-next primary-button outline"
                >
                  <div className="arrow-wrap">
                    <img
                      style={arrowStyle}
                      loading="lazy"
                      alt="Arrow"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870e5cbc53776c9e8ba8366_ic-arrow.svg"
                      className="arrow"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                      alt="Arrow"
                      className="arrow hover"
                    />
                  </div>
                  <div className="w-inline-block">Next</div>
                </a>
                <link
                  rel="prerender"
                  href={`?0dd9f9bb_page=${currentPage + 1}`}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
