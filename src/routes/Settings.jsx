import { useState } from "react";

const Settings = () => {
  // load settings from local storage

  const [settings, setSettings] = useState();

  return (
    <main>
      <h1>Settings</h1>
      <form action="">
        <div>
          <label htmlFor="">Auto Collapse after select</label>
          <input type="checkbox" />
        </div>
        <div>
          <label htmlFor="">Notification</label>
          <input type="checkbox" />
        </div>
        <div>
          <label htmlFor="">Dark Mode</label>
          <input type="checkbox" />
        </div>
        <div>
          <label htmlFor="">Clear History</label>
          <button>Clear</button>
        </div>
      </form>
    </main>
  );
};

export default Settings;
