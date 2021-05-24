import { CardChecklist, Check, X } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
export default function Footer({
  className,
  modeList,
  handleShowAll,
  handleShowUnfinished,
  handleShowFinished,
}) {
  return (
    <div className={`d-flex justify-content-center ${className}`}>
      <Button
        variant={`${modeList === "all" ? "primary" : "outline-primary"} mr-3`}
        onClick={handleShowAll}
      >
        <CardChecklist size={30} />
      </Button>
      <Button
        variant={`${
          modeList === "unfinished" ? "danger" : "outline-danger"
        } mr-3`}
        onClick={handleShowUnfinished}
      >
        <X size={30} />
      </Button>
      <Button
        variant={`${modeList === "finished" ? "success" : "outline-success"}`}
        onClick={handleShowFinished}
      >
        <Check size={30} />
      </Button>
    </div>
  );
}
