import React from "react";

type Props = {
  type?: "success" | "info" | "warning" | "error";
  message?: string;
};

const GeneralAlert = ({
  icon,
  classNames,
  message,
}: {
  icon: React.ReactElement;
  classNames: string[];
  message: Props["message"];
}) => {
  return (
    <div className={`alert shadow-lg ${classNames.join(" ")}`}>
      <div>
        {icon}
        {message && <span>{message}</span>}
      </div>
    </div>
  );
};

const SuccessAlert = ({ message }: Pick<Props, "message">) => {
  return (
    <GeneralAlert
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
      classNames={["alert-success"]}
      message={message}
    />
  );
};

const InfoAlert = ({ message }: Pick<Props, "message">) => {
  return (
    <GeneralAlert
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      }
      classNames={["alert-info"]}
      message={message}
    />
  );
};

const WarningAlert = ({ message }: Pick<Props, "message">) => {
  return (
    <GeneralAlert
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      }
      classNames={["alert-warning"]}
      message={message}
    />
  );
};

const ErrorAlert = ({ message }: Pick<Props, "message">) => {
  return (
    <GeneralAlert
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
      classNames={["alert-error"]}
      message={message}
    />
  );
};

const Alert = ({ type, message }: Props) => {
  if (type === "success") {
    return <SuccessAlert message={message} />;
  } else if (type === "warning") {
    return <WarningAlert message={message} />;
  } else if (type === "error") {
    return <ErrorAlert message={message} />;
  } else {
    return <InfoAlert message={message} />;
  }
};

export default Alert;
