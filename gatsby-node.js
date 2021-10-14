/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.sourceNodes = async ({ actions, createNodeId }) => {
  const turnImageObjectIntoGatsbyNode = (image, project) => {
    const content = {
      content: project.title,
      ["image___NODE"]: createNodeId(`project-image-{${project.id}}`),
    }
    const nodeId = createNodeId(`image-{${image.id}}`)
    const nodeContent = JSON.stringify(image)
    const nodeContentDigest = crypto
      .createHash("md5")
      .update(nodeContent)
      .digest("hex")

    const nodeData = {
      ...image,
      ...content,
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: "Image",
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    }
    return nodeData
  }

  const createImageObjectFromURL = url => {
    const lastIndexOfSlash = url.lastIndexOf("/")
    const id = url.slice(lastIndexOfSlash + 1, url.lastIndexOf("."))
    return { id, image: id, url }
  }

  const { createNode } = actions
  const projects = await service.getProjects()

  projects.forEach(project => {
    project.images.map(image => {
      const imgObj = createImageObjectFromURL(image.source)
      const nodeData = turnImageObjectIntoGatsbyNode(imgObj, project)
      createNode(nodeData)
    })
  })
}

exports.onCreateNode = async ({
  node,
  actions,
  store,
  getCache,
  createNodeId,
}) => {
  if (node.internal.type === "Image") {
    const { createNode } = actions

    /* Download the image and create the File node. Using gatsby-plugin-sharp and gatsby-transformer-sharp the node will become an ImageSharp. */

    const fileNode = await createRemoteFileNode({
      url: node.url, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      store, // Gatsby's redux store
      getCache, // get Gatsby's cache
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
    })

    if (fileNode) {
      // link the File node to Image node at field image
      node.image___NODE = fileNode.id
    }
  }
}
