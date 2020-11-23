/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDrink = /* GraphQL */ `
  subscription OnCreateDrink {
    onCreateDrink {
      id
      name
      description
      ingredients
      instructions
      reviews {
        items {
          id
          drinkID
          content
          score
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDrink = /* GraphQL */ `
  subscription OnUpdateDrink {
    onUpdateDrink {
      id
      name
      description
      ingredients
      instructions
      reviews {
        items {
          id
          drinkID
          content
          score
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDrink = /* GraphQL */ `
  subscription OnDeleteDrink {
    onDeleteDrink {
      id
      name
      description
      ingredients
      instructions
      reviews {
        items {
          id
          drinkID
          content
          score
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
      id
      drinkID
      drink {
        id
        name
        description
        ingredients
        instructions
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      score
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
      id
      drinkID
      drink {
        id
        name
        description
        ingredients
        instructions
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      score
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
      id
      drinkID
      drink {
        id
        name
        description
        ingredients
        instructions
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      score
      userID
      createdAt
      updatedAt
    }
  }
`;
