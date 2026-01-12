interface PageTitleProps {
  title?: string;
  description?: string;
}

function PageTitle({
  title = "New Arrivals",
  description = "Explore fresh arrivals crafted to elevate your makeup and skincare game.",
}: PageTitleProps) {
  return (
    <div className="page-title">
      <div className="w-layout-blockcontainer container w-container">
        <div className="pg-inner">
          <div className="overflow-hidden">
            <h1
              data-w-id="7b0d4063-4626-25ba-c197-c04a4408232b"
            //   style={{
            //     WebkitTransform:
            //       "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-20deg, 0)",
            //     MozTransform:
            //       "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-20deg, 0)",
            //     msTransform:
            //       "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-20deg, 0)",
            //     transform:
            //       "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-20deg, 0)",
            //   }}
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
