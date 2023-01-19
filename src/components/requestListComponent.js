import React from "react";
import RequestItem from "./requestItem";

function RequestList({ requests }) {

  if (requests.length === 0) {
    return <p>Keine Anfragen oder fehlende Rechte!</p>;
  } else {
    return (
      <div>
        <h2>Anfragen</h2>
        <ul className="list-group">
          {requests[0].map((item, index) => (
            <RequestItem key={item} plate={item} zone={requests[1][index]}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default RequestList;
