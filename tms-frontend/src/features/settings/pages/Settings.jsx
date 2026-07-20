import LoadingSpinner from "@/Components/common/LoadingSpinner";
import CompanySettings from "../components/CompanySettings";
import SystemStatus from "../components/SystemStatus";
import useAuth from "@/features/auth/hooks/useAuth";
import ChangePassword from "../components/ChangePassword";
import NotificationSettings from "../components/NotificationSettings";
import {
    useSettings,
    useSystemStatus,
} from "../hooks/useSettings";

export default function Settings() {
    const { user } = useAuth();

    const {
        data: settings,
        isLoading,
    } = useSettings();

    const {
        data: status,
        isLoading: loading2,
    } = useSystemStatus();

    if (isLoading || loading2) {
        return <LoadingSpinner />;
    }

    return (
        <div className="space-y-8">

            <h1 className="text-3xl font-bold">
                Settings
            </h1>

            {/* Admin Only */}
            {user?.role === "Admin" && (
                <>
                    <CompanySettings
                        settings={settings?.data}
                    />
                    <SystemStatus
                        status={status.data}
                    />
                </>
            )}

            {/* Everyone */}
            <ChangePassword/>

            {/* Admin & Dispatcher */}
            {user?.role !== "Driver" && (
                <NotificationSettings/>
            )}
        </div>
    );
}