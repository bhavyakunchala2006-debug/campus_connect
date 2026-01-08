import {
  LayoutDashboard,
  MessageCircleQuestion,
  Users,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 hidden md:block border-r bg-card">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">CampusConnect</h1>
        <p className="text-sm text-gray-500">Academic Portal</p>
      </div>

      <nav className="px-4 space-y-2">
        <Item icon={LayoutDashboard} label="Dashboard" active />
        <Item icon={MessageCircleQuestion} label="Academic Doubts" />
        <Item icon={Users} label="Mock Interviews" />
        <Item icon={GraduationCap} label="Mentoring" />
        <Item icon={Briefcase} label="Internships" />
      </nav>
    </aside>
  );
}

function Item({ icon: Icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer ${
        active ? "bg-primary/10 text-primary" : "hover:bg-muted"
      }`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </div>
  );
}
