import { BsFillPatchCheckFill } from "react-icons/bs";

interface props {
  label: string;
  value: any;
  isCheckedIn: boolean;
}

export default function FormField({
  label,
  value,
  isCheckedIn = false,
}: props) {
  let jsx = (
    <p className="card-text" style={{ textTransform: "capitalize" }}>
      {value}
    </p>
  );

  switch (label) {
    case "name":
      jsx = (
        <>
          <h5
            className="card-title d-inline-block mt-1"
            style={{ width: "90%", textTransform: "capitalize" }}
          >
            {value}
            {isCheckedIn && (
              <>
                <span> </span>
                <BsFillPatchCheckFill
                  color={"green"}
                  size={20}
                  className="ps-6"
                />
              </>
            )}
          </h5>
        </>
      );
      break;
    case "email":
      jsx = (
        <p className="card-text" style={{ textTransform: "lowercase" }}>
          {value}
        </p>
      );
      break;
    case "accessCode":
      jsx = (
        <p
          className="card-text"
          style={{
            textTransform: "uppercase",
            color: "rgb(200 134 7)",
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          {value}
        </p>
      );
      break;
    case "registeredAt":
      jsx = (
        <div style={{ display: "flex", columnGap: 5 }}>
          <label
            htmlFor=""
            style={{
              fontWeight: 500,
            }}
          >
            Registered:
          </label>
          <p className="card-text">{new Date(value).toLocaleString()}</p>
        </div>
      );
      break;
    default:
      break;
  }

  return jsx;
}
