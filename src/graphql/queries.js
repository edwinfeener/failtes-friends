/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDrink = /* GraphQL */ `
  query GetDrink($id: ID!) {
    getDrink(id: $id) {
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
export const listDrinks = /* GraphQL */ `
  query ListDrinks(
    $filter: ModelDrinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        drinkID
        drink {
          id
          name
          description
          ingredients
          instructions
          createdAt
          updatedAt
        }
        content
        score
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
