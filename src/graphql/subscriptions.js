/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onMessagebyGroupId = /* GraphQL */ `
  subscription OnMessagebyGroupId($groupMessagesId: ID!) {
    onMessagebyGroupId(groupMessagesId: $groupMessagesId) {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
      GroupName
      GroupDescription
      GroupImageUrlPath
      messages {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
      id
      GroupName
      GroupDescription
      GroupImageUrlPath
      messages {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
      id
      GroupName
      GroupDescription
      GroupImageUrlPath
      messages {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
    }
  }
`;
