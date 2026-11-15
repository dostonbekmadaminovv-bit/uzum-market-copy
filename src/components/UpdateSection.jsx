import UpdateForm from "./UpdateForm";

function UpdateSection({ product, onClose, onUpdate }) {
  if (!product) return null;

  return <UpdateForm product={product} onClose={onClose} onUpdate={onUpdate} />;
}

export default UpdateSection;
