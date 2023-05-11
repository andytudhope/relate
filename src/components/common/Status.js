import { useZupass } from 'zukit'

function Status() {
    const [zupass] = useZupass();
    const { status } = zupass;
    switch (status) {
      case "logged-out":
      case "logging-in":
        return null;
      case "logged-in":
        if (zupass.anonymous) {
          return (
            <div className="flex flex-col gap-2">
              <div>✅ Valid zero-knowledge proof</div>
              <div>
                👁️‍🗨️ Anonymity set <strong>{zupass.group.name}</strong>
              </div>
              <div>🕶️ You are one of {zupass.group.members.length} members</div>
            </div>
          );
        } else {
          return (
            <div className="flex flex-col gap-2">
              <div>✅ Valid zero-knowledge proof</div>
              <div>
                👋 Welcome, <strong>{zupass.participant.name}</strong>
                <Pellet>{zupass.participant.role}</Pellet>
              </div>
              <div>🖋️ Email {zupass.participant.email}</div>
              <div>👓 UUID {zupass.participant.uuid}</div>
            </div>
          );
        }
      default:
        throw new Error(`Invalid status ${status}`);
    }
}

function Pellet({ children }) {
    return (
      <span className="inline-block bg-gray-100 rounded-md px-2 text-sm font-bold ml-2">
        {children}
      </span>
    );
}

export default Status