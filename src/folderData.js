const folderData = {
id : 1,
title : "Root",
isFolder : true,
tree : [
    {
        id : 2,
        title : "My Notes",
        isFolder : true,
        tree : [
            {
                id : 11,
                title : "Personal Folder",
                isFolder : true,
                tree: []
            },
            {
                id : 12,
                title : "script.js",
                isFolder : false,
                tree: []
            }
        ]
    },
    {
        id : 3,
        title : "My Videos",
        isFolder : true,
        tree : [
            {
                id : 21,
                title : "Music Folder",
                isFolder : true,
                tree: []
            },
            {
                id : 22,
                title : "Document Folder",
                isFolder : true,
                tree: []
            },
            {
                id : 23,
                title : "Script Folder",
                isFolder : true,
                tree : [
                    {
                        id : 231,
                        title : "Other Folder",
                        isFolder : true,
                        tree: []
                    },
                    {
                        id : 232,
                        title : "bootstrap.css",
                        isFolder : false,
                        tree: []
                    }
                ]
            },
            {
                id : 24,
                title : "java.js",
                isFolder : false,
                tree: []
            }
        ]
    },
    {
        id : 4,
        title : "todoList.dox",
        isFolder : false,
        tree: []
    }
]
};

export default folderData;