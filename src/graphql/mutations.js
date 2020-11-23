/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
export const createDrink = /* GraphQL */ `
  mutation CreateDrink(
    $input: CreateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    createDrink(input: $input, condition: $condition) {
      id
      name
      description
      ingredients
      instructions
      author
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
export const updateDrink = /* GraphQL */ `
  mutation UpdateDrink(
    $input: UpdateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    updateDrink(input: $input, condition: $condition) {
      id
      name
      description
      ingredients
      instructions
      author
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
export const deleteDrink = /* GraphQL */ `
  mutation DeleteDrink(
    $input: DeleteDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    deleteDrink(input: $input, condition: $condition) {
      id
      name
      description
      ingredients
      instructions
      author
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      drinkID
      drink {
        id
        name
        description
        ingredients
        instructions
        author
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      drinkID
      drink {
        id
        name
        description
        ingredients
        instructions
        author
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      drinkID
      drink {
        id
        name
        description
        ingredients
        instructions
        author
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
