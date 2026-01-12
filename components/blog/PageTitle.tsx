interface PageTitleProps {
  title: string;
  subtitle: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  const titleStyle = {
    WebkitTransform:
      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-20deg, 0)",
    MozTransform:
      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-20deg, 0)",
    msTransform:
      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-20deg, 0)",
    transform:
      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-20deg, 0)",
  };

  return (
    <div className="page-title">
      <div className="w-layout-blockcontainer container w-container">
        <div className="pg-inner">
          <div className="overflow-hidden">
            <h1
              data-w-id="4a2cd479-e1ac-1b5e-2f98-071ec245f757"
            //   style={titleStyle}
              className="main-heading"
            >
              {title}
            </h1>
          </div>
          <p className="title-info">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
