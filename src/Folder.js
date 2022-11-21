import { useState } from "react"

const Folder = ({ explorer }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    if (explorer.isFolder) {
        return (
            <div>
                <div onClick={() => setIsExpanded(!isExpanded)}>{explorer.name}</div>

                <div style={{ paddingLeft: '20px', display: isExpanded ? 'block' : 'none' }}>
                    {explorer.items.map(exp => {
                        return <p><Folder key={exp.name} explorer={exp} /></p>
                    })}
                </div>

            </div>
        )
    } else {
        return (
            <p>{explorer.name}</p>
        )

    }
}

export default Folder