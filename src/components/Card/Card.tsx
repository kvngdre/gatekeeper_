import { checkInUser } from "../../services/check-in-user.service";
import { IUser } from "../Form/Form";
import FormField from "../FormField";

interface props {
  isSearching: boolean;
  showCard: boolean;
  onClose: () => void;
  user?: IUser;
  onCheckIn: (state: boolean) => void;
  isCheckingIn: boolean;
  setUser: (user: IUser) => void;
}

export default function Card({
  isSearching,
  showCard,
  onClose,
  user,
  onCheckIn,
  isCheckingIn,
  setUser,
}: props) {
  {
    return (
      showCard &&
      (isSearching ? (
        <>
          <div
            className="card mt-4 dark-bg"
            style={{
              width: "90%",
              margin: "auto",
              maxWidth: 450,
              minHeight: 400,
            }}
            aria-hidden="true"
          >
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder d-block mb-3 col-11"></span>
                <span className="placeholder d-block mb-3 col-4"></span>
                <span className="placeholder d-block mb-3 col-4"></span>
                <span className="placeholder d-block mb-3 col-6"></span>
                <span className="placeholder d-block mb-3 col-8"></span>
                <span className="placeholder d-block mb-3 col-9"></span>
                <span className="placeholder d-block mb-3 col-3"></span>
                <span className="placeholder d-block mb-3 col-8"></span>
              </p>
              <a
                className="btn btn-primary disabled placeholder col-6"
                aria-disabled="true"
              ></a>
            </div>
          </div>
        </>
      ) : user ? (
        <>
          <div
            className="mt-4"
            style={{ width: "90%", margin: "auto", maxWidth: 450 }}
          >
            <div className="card" style={{ position: "relative" }}>
              <button
                type="button"
                className="btn btn-danger"
                onClick={onClose}
                style={{
                  width: "fit-content",
                  position: "absolute",
                  right: 10,
                  top: 10,
                }}
              >
                X
              </button>
              <div className="card-body dark-bg">
                {Object.keys(user)
                  .filter(
                    (key) =>
                      !["createdAt", "updatedAt", "id", "checkInTime"].includes(
                        key
                      )
                  )
                  .map((key) => {
                    type UserKeyType = keyof typeof user;

                    return (
                      <FormField
                        value={user[key as UserKeyType]}
                        key={key}
                        label={key}
                        isCheckedIn={user.isCheckedIn}
                      />
                    );
                  })}
                {isCheckingIn ? (
                  <button className="btn btn-primary" type="button" disabled>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden" role="status">
                      Loading...
                    </span>
                  </button>
                ) : (
                  <button
                    className="btn btn-primary mt-4"
                    disabled={user.isCheckedIn}
                    onClick={async () => {
                      onCheckIn(true);
                      const response = await checkInUser(user.id);
                      const data = await response.json();
                      const statusCode = response.status;
                      onCheckIn(false);

                      if (statusCode == 200) {
                        setUser(data.data);
                        console.log(statusCode);
                      }
                    }}
                  >
                    Check In
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center align-self-center"
          style={{
            height: 100,
            border: "3px solid whitesmoke",
            borderRadius: 10,
            marginTop: 60,
            width: "90%",
            maxWidth: 400,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <h5>Guest Not Found</h5>
        </div>
      ))
    );
  }
}
