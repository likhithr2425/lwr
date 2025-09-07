import { projectGroups } from "@/types"; 
import { ChevronRight } from "lucide-react"
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { 
    Collapsible, 
    CollapsibleTrigger, 
    CollapsibleContent, 
} 
from "@/components/ui/collapsible"


interface CollapsibleSidebarMenuItemProps{
    groups: projectGroups[]
}


export function CollapsibleSidebarMenuItem({groups} : CollapsibleSidebarMenuItemProps){
    return(
        <SidebarMenu>
            {groups.map((group) => (
                <Collapsible key = {group.title} className= "group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                                <span>{group.title}</span>
                                <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                {group.projects.map((project) => (
                                    <SidebarMenuSubItem key = {project.name} className = "mt-2">
                                        <a href = {project.url}>{project.name}</a>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>
            ))}
        </SidebarMenu>
    )
}