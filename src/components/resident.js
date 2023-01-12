import { useState } from 'react';

function Resident(){
    const [numbersplate, setNumbersplate] = useState("");
    const [place, setPlace] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // todo: trigger claimParkingPass
      }

    return(
        <div>
            <h1>Bewohnerportal</h1>
            <h2>Neuen Parkschein beantragen</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Kennzeichen:
                    <input type="text" name="numbersplate" value={numbersplate} onChange={(e) => setNumbersplate(e.target.value)}/>
                    <br></br>
                    Ort:
                    <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default Resident;