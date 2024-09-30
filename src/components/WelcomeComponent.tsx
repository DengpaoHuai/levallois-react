import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";

type WelcomeComponentProps = {
  title: string;
  children: React.ReactNode;
};

const WelcomeComponent: React.FC<WelcomeComponentProps> = ({
  title = "tedt",
  children,
}) => {
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <div className="card">{children}</div>
    </div>
  );
};

export default WelcomeComponent;
