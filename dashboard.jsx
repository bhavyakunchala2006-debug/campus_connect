import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import RoleSwitcher from "../components/RoleSwitcher";
import {
  MessageCircleQuestion,
  Users,
  GraduationCap,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Alex! 👋</h1>
              <p className="text-muted-foreground mt-2">
                Here's what's happening in your academic journey today.
              </p>
            </div>
            <div className="hidden sm:block text-right">
              <p className="font-medium">Current Semester</p>
              <p className="text-muted-foreground">Spring 2025</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Active Doubts" value="1" icon={MessageCircleQuestion} />
            <StatCard title="Upcoming Interviews" value="0" icon={Users} />
            <StatCard title="Mentoring Sessions" value="1" icon={GraduationCap} />
            <StatCard title="Pending Requests" value="0" icon={Clock} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
              <div className="flex gap-4 p-4 rounded-xl bg-muted">
                <MessageCircleQuestion className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-medium">Understanding React Hooks</h4>
                  <p className="text-sm text-gray-500">
                    I'm struggling with useEffect vs useLayoutEffect.
                  </p>
                  <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full border">
                    open
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Upcoming Schedule</h3>
              <p className="text-center py-8 text-gray-500">
                No upcoming events scheduled.
              </p>
            </div>
          </div>

        </div>
      </main>

      <RoleSwitcher />
    </>
  );
}
