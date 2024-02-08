function IconLink({ icon, url }: IconLinkProps) {
    return (
        <a href={url} target="_blank">
            {icon}
        </a>
    )
}

export { IconLink }