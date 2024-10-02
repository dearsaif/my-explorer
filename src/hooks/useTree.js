const useTree = () => {
    let a = [];

    function insertNode(folderData, folderId, name, isFolder) {
        const newNode = {
            id: new Date().getTime(),
            title: name,
            isFolder,
            tree:[]
        }
        if(folderData.id === folderId && folderData.isFolder){
            isFolder ? folderData.tree.unshift(newNode) : folderData.tree.push(newNode)
        }
        let latestNode = [];
        latestNode = folderData.tree.map((obj)=>{
            return insertNode(obj, folderId, name, isFolder)
        })
        return {...folderData, tree: latestNode};
    }
    return { insertNode };
}
export default useTree;