import Input from "../Elements/LabeledInput/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AuthContext } from "../../context/authContext";
import { ModeContext } from "../../context/modeContext";
import { useContext } from "react";

const Header = () => {
  const date = new Date().toDateString().slice(4);
  const { name } = useContext(AuthContext);
  const { mode, toggleMode } = useContext(ModeContext); // Gunakan ModeContext

  return (
    <header className="border-b-2 p-6 flex items-center justify-between">
      <div className="flex">
        <div className="font-bold text-lg">{name}</div>
        <div className="ms-6 text-gray-03">{date}</div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <NotificationsIcon className="text-gray-01 scale-110" />
        </div>
        <div className="hidden sm:block">
          <Input variant="bg-white w-80" />
        </div>
        {/* Toggle Dark Mode */}
        <button
          onClick={toggleMode}
          className={`p-2 rounded-full ${mode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
            }`}
        >
          {mode ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Header;
