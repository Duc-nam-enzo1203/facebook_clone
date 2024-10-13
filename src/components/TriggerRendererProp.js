import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function TriggerRendererProp({ onClickUpload }) {
  const handleUpload = () => {
    onClickUpload();
  };

  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">Ảnh/Video</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center col-1 p-0 m-0"
          style={{ borderRadius: "50%" }}
          onClick={() => handleUpload()}
        >
          <Image
            ref={ref}
            roundedCircle
            src="../images/photos.png"
            className="w-100"
          />
        </Button>
      )}
    </OverlayTrigger>
  );
}

export default TriggerRendererProp;
