import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import {
    ArrowRight,
    AudioWaveform,
    Archive,
    BadgeCheck,
    Bell,
    Briefcase,
    BookOpen,
    BarChart3,
    BarChart2,
    Bot,
    ChevronRight,
    ChevronsUpDown,
    Command,
    CreditCard,
    DollarSign,
    Folder,
    Forward,
    Frame,
    GalleryVerticalEnd,
    LayoutDashboard,
    LogOut,
    Map,
    MoreHorizontal,
    MessageSquare,
    Package,
    PieChart,
    Plus,
    Settings2,
    ShoppingCart,
    Sparkles,
    SquareTerminal,
    Trash2,
    Truck,
    Users,
  } from "lucide-react";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
  } from "@/components/ui/sidebar";
  import LogoLogin from "@/components/logo-login"
  const data = {
   
   
    
  
  };

export default function AppSidebar() {
  
    const sidebarLinks = [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: BarChart3,
        isActive: true,
        items: [
          {
            title: "Overview",
            url: "/dashboard/overview",
          },
        ],
      },
      {
        title: "Staff Management",
        url: "/staff",
        icon: Users,
        items: [
          {
            title: "Employee Directory",
            url: "/dashboard/staff",
          },
          {
            title: "Onboarding",
            url: "/dashboard/staff/onboarding",
          },
          {
            title: "Attendance & Time",
            url: "/dashboard/staff/attendance",
          },
          {
            title: "Performance Reviews",
            url: "/dashboard/staff/performance",
          },
          {
            title: "Training & Development",
            url: "/dashboard/staff/training",
          },
          {
            title: "Payroll",
            url: "/dashboard/staff/payroll",
          },
        ],
      },
      {
        title: "Project Management",
        url: "/projects",
        icon: Briefcase,
        items: [
          {
            title: "Project Overview",
            url: "/projects/overview",
          },
          {
            title: "Task Management",
            url: "/projects/tasks",
          },
          {
            title: "Timeline & Milestones",
            url: "/projects/timeline",
          },
          {
            title: "Resource Allocation",
            url: "/projects/resources",
          },
          {
            title: "Budget Tracking",
            url: "/projects/budget",
          },
          {
            title: "Client Projects",
            url: "/projects/clients",
          },
        ],
      },
      {
        title: "Communication",
        url: "/communication",
        icon: MessageSquare,
        items: [
          {
            title: "Team Messages",
            url: "/communication/messages",
          },
          {
            title: "Announcements",
            url: "/communication/announcements",
          },
          {
            title: "Notice Board",
            url: "/communication/notices",
          },
          {
            title: "Document Sharing",
            url: "/communication/documents",
          },
          {
            title: "Suggestion Box",
            url: "/communication/suggestions",
          },
        ],
      },
      {
        title: "Finance",
        url: "/finance",
        icon: DollarSign,
        items: [
          {
            title: "Invoicing & Billing",
            url: "/finance/invoicing",
          },
          {
            title: "Expense Management",
            url: "/finance/expenses",
          },
          {
            title: "Budget Planning",
            url: "/finance/budget",
          },
          {
            title: "Financial Reports",
            url: "/finance/reports",
          },
          {
            title: "Payroll Processing",
            url: "/finance/payroll",
          },
        ],
      },
      {
        title: "Supply Chain",
        url: "/supply-chain",
        icon: Truck,
        items: [
          {
            title: "Inventory Management",
            url: "/supply-chain/inventory",
          },
          {
            title: "Procurement",
            url: "/supply-chain/procurement",
          },
          {
            title: "Audit",
            url: "/supply-chain/audit",
          },
        ],
      },
      {
        title: "Resources",
        url: "/resources",
        icon: Archive,
        items: [
          {
            title: "Facility",
            url: "/resources/facility",
          },
          {
            title: "Assets",
            url: "/resources/assets",
          },
        ],
      },
      {
        title: "Analytics & Reports",
        url: "/analytics",
        icon: BarChart2,
        items: [
          {
            title: "Operational Reports",
            url: "/analytics/operational",
          },
          {
            title: "Financial Reports",
            url: "/analytics/financial",
          },
          {
            title: "Analytics Dashboard",
            url: "/analytics/dashboard",
          },
          {
            title: "Custom Dashboards",
            url: "/analytics/custom",
          },
        ],
      },
      {
        title: "Notifications",
        url: "/notifications",
        icon: Bell,
        items: [
          {
            title: "System Alerts",
            url: "/notifications/alerts",
          },
          {
            title: "Deadline Reminders",
            url: "/notifications/deadlines",
          },
          {
            title: "Approval Requests",
            url: "/notifications/approvals",
          },
          {
            title: "Important Updates",
            url: "/notifications/updates",
          },
        ],
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings2,
        items: [
          {
            title: "Company Profile",
            url: "/settings/profile",
          },
          {
            title: "User Management",
            url: "/settings/users",
          },
          {
            title: "System Configuration",
            url: "/settings/system",
          },
          {
            title: "Security Settings",
            url: "/settings/security",
          },
          {
            title: "Backup & Recovery",
            url: "/settings/backup",
          },
        ],
      },
    ];
  return (
    <Sidebar collapsible="icon">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
        <LogoLogin/>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
       
        <SidebarMenu>
          {sidebarLinks.map((item) => (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
   
    <SidebarRail />
  </Sidebar>
      
    
  )
}
