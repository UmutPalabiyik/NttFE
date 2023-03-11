export interface SubmenuItemProps {
    title: string,
    submenu?: {}[]
}

export interface SubmenuItemPopoverContentProps {
    submenu?: {}[],
    handlePopoverClose: any
}