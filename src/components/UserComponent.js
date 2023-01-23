import FormRenewPlate from "./forms/formRenewPlate";
import FormAddPass from "./forms/formAddPlate";
import FormAddVisitorPass from "./forms/formAddVisitorPass";

function UserComponent(){
    return(
        <div>
            <h1 className="text-center py-3">Benutzerpanel</h1>
        <FormAddPass />
        <FormAddVisitorPass />
        <FormRenewPlate />
        </div>
    )
}

export default UserComponent;