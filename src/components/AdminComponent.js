import FormAddConfirmer from "./forms/formAddConfirmer";
import FormAddWorker from "./forms/formAddWorker";
import FormConfirmPlate from "./forms/formConfirmPlate";

function AdminComponent() {
  return (
    <div>
      <h1 className="text-center py-3">Adminpanel</h1>
      <FormConfirmPlate />
      <FormAddConfirmer />
      <FormAddWorker />
    </div>
  );
}

export default AdminComponent;