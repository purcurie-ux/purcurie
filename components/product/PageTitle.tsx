interface PageTitleProps {
  title?: string;
  description?: string;
}

function PageTitle({
  title = "New Arrivals",
  description = "The latest cosmetics and beauty essentials, curated for modern beauty",
}: PageTitleProps) {
  return (
    <div className="page-title">
      <div className="w-layout-blockcontainer container w-container">
        <div className="pg-inner">
          <div className="overflow-hidden">
            <h1
              data-w-id="7b0d4063-4626-25ba-c197-c04a4408232b"
          
              className="main-heading"
            >
              {title}
            </h1>
          </div>
          <p className="title-info">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
