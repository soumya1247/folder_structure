const explorer = {
    name : 'root',
    isFolder: true,
    items : [
        {
            name : 'public',
            isFolder: true,
            items : [
                {
                    name : 'index.html',
                    isFolder: false,
                    items : []
                },
                {
                    name : 'favicon.ico',
                    isFolder: false,
                    items : []
                }
            ]
        },
        {
            name : 'src',
            isFolder: true,
            items : [
                {
                    name : 'App.css',
                    isFolder: false,
                    items : []
                },
                {
                    name : 'App.js',
                    isFolder: false,
                    items : []
                },
                {
                    name : 'index.css',
                    isFolder: false,
                    items : []
                },
                {
                    name : 'index.js',
                    isFolder: false,
                    items : []
                }
            ]
        },
        {
            name : 'package-lock.json',
            isFolder: false,
            items : []
        },
        {
            name : 'package.json',
            isFolder: false,
            items : []
        }
    ]
}

export default explorer