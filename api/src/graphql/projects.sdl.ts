export const schema = gql`
  type Project {
    id: Int!
    userID: String!
    name: String!
    description: String!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
    userID: String!
    name: String!
    description: String!
  }

  input UpdateProjectInput {
    userID: String
    name: String
    description: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`;
