import { ArrowBigUpDash, CalendarHeart, FolderOpenDotIcon, LayoutDashboard, ScrollTextIcon, SquareDashedBottomCodeIcon, Brain, ChevronUp, ChevronRight, UserRoundCheck, Notebook, Text } from "lucide-react"
import { CollapsibleSidebarMenuItem } from "./CollapsibleSidebarMenuItem"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter
} from "@/components/ui/sidebar"
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenu, DropdownMenuPortal } from "@radix-ui/react-dropdown-menu"

// Menu items.
const items = [
  {
    title: "Courses",
    url: "#",
    icon: ScrollTextIcon,
  },
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Workspace",
    url: "#",
    icon: SquareDashedBottomCodeIcon,
  },
  {
    title: "Leaderboard",
    url: "#",
    icon: ArrowBigUpDash,
  },
  {
    title: "Calendar",
    url: "#",
    icon: CalendarHeart,
  },
  {
    title: "Recommendation",
    url: "#",
    icon: FolderOpenDotIcon,
  },
]

const projs = [
  {
    title: "ML",
    projects: [
      {
        name: "SVM",
        url: "#",
      },
      {
        name: "Fisher's",
        url: "#",
      },
    ],
  },
  {
    title: "DL",
    projects: [
      {
        name: "LLM",
        url: "#",
      },
      {
        name: "Obj Det",
        url: "#",
      },
    ],
  },
  {
    title: "FS",
    projects: [
      {
        name: "Banking",
        url: "#",
      },
      {
        name: "Portfolio",
        url: "#",
      },
    ],
  },
]


export function AppSidebar() {
  return (
    <Sidebar 
      variant="floating" 
      collapsible="icon">
      <SidebarHeader className="font-semibold">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 shrink-0" />
          <div className="font-semibold text-lg group-data-[collapsible=icon]:hidden">
            Learn Work Repeat
          </div>
        </div>

      </SidebarHeader>
      <SidebarContent className = "sidebar-scroll">
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <CollapsibleSidebarMenuItem groups={projs} />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Knowledge Hub</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Notebook />
                    <span>Notes</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Text />
                    <span>Discussion</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <UserRoundCheck />
                  Username
                  <ChevronRight className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuPortal>
                <DropdownMenuContent
                  side="right"
                  align="end"
                  className="z-50 bg-black text-white min-w-[200px] p-2 rounded-md shadow-lg"
                >
                  <DropdownMenuItem>Upgrade to Premium</DropdownMenuItem>
                  <DropdownMenuItem>Account</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Notification</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

    </Sidebar>
  )
}