import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";

export const PriceCard = ({
  id,
  title,
  price,
  deletePrice,
  handleShowEditPriceForm,
  handlSelectPrice,
  isAdmin,
}) => {
  const showEditForm = () => {
    handleShowEditPriceForm();
    handlSelectPrice();
  };

  return (
    <div className="vacList1">
      <div className="vacName">{title}</div>
      {isAdmin ? (
        <div className="PoslugaPrice">
          {price}
          <button onClick={showEditForm}>
            <EditIcon />
          </button>
          <button onClick={deletePrice}>
            <DeleteOutlineOutlinedIcon fontSize="large" color="black" />
          </button>
        </div>
      ) : (
        <div className="PoslugaPrice">{price}</div>
      )}
    </div>
  );
};
