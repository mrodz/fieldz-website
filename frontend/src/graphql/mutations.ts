/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      sub
      type
      Regions {
        items {
          id
          userId
          regionId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        Field {
          id
          name
          address
          regionID
          createdAt
          updatedAt
          __typename
        }
        User {
          id
          sub
          type
          bio
          createdAt
          updatedAt
          userReservationId
          owner
          __typename
        }
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      createdAt
      updatedAt
      userReservationId
      owner
      __typename
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
      sub
      type
      Regions {
        items {
          id
          userId
          regionId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        Field {
          id
          name
          address
          regionID
          createdAt
          updatedAt
          __typename
        }
        User {
          id
          sub
          type
          bio
          createdAt
          updatedAt
          userReservationId
          owner
          __typename
        }
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      createdAt
      updatedAt
      userReservationId
      owner
      __typename
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
      sub
      type
      Regions {
        items {
          id
          userId
          regionId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        Field {
          id
          name
          address
          regionID
          createdAt
          updatedAt
          __typename
        }
        User {
          id
          sub
          type
          bio
          createdAt
          updatedAt
          userReservationId
          owner
          __typename
        }
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      createdAt
      updatedAt
      userReservationId
      owner
      __typename
    }
  }
`;
export const createReservation = /* GraphQL */ `
  mutation CreateReservation(
    $input: CreateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    createReservation(input: $input, condition: $condition) {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
      createdAt
      updatedAt
      reservationFieldId
      reservationUserId
      __typename
    }
  }
`;
export const updateReservation = /* GraphQL */ `
  mutation UpdateReservation(
    $input: UpdateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    updateReservation(input: $input, condition: $condition) {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
      createdAt
      updatedAt
      reservationFieldId
      reservationUserId
      __typename
    }
  }
`;
export const deleteReservation = /* GraphQL */ `
  mutation DeleteReservation(
    $input: DeleteReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    deleteReservation(input: $input, condition: $condition) {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
      createdAt
      updatedAt
      reservationFieldId
      reservationUserId
      __typename
    }
  }
`;
export const createField = /* GraphQL */ `
  mutation CreateField(
    $input: CreateFieldInput!
    $condition: ModelFieldConditionInput
  ) {
    createField(input: $input, condition: $condition) {
      id
      name
      address
      regionID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateField = /* GraphQL */ `
  mutation UpdateField(
    $input: UpdateFieldInput!
    $condition: ModelFieldConditionInput
  ) {
    updateField(input: $input, condition: $condition) {
      id
      name
      address
      regionID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteField = /* GraphQL */ `
  mutation DeleteField(
    $input: DeleteFieldInput!
    $condition: ModelFieldConditionInput
  ) {
    deleteField(input: $input, condition: $condition) {
      id
      name
      address
      regionID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRegion = /* GraphQL */ `
  mutation CreateRegion(
    $input: CreateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    createRegion(input: $input, condition: $condition) {
      id
      name
      banner
      bio
      Fields {
        items {
          id
          name
          address
          regionID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          regionId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRegion = /* GraphQL */ `
  mutation UpdateRegion(
    $input: UpdateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    updateRegion(input: $input, condition: $condition) {
      id
      name
      banner
      bio
      Fields {
        items {
          id
          name
          address
          regionID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          regionId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRegion = /* GraphQL */ `
  mutation DeleteRegion(
    $input: DeleteRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    deleteRegion(input: $input, condition: $condition) {
      id
      name
      banner
      bio
      Fields {
        items {
          id
          name
          address
          regionID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          regionId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserRegion = /* GraphQL */ `
  mutation CreateUserRegion(
    $input: CreateUserRegionInput!
    $condition: ModelUserRegionConditionInput
  ) {
    createUserRegion(input: $input, condition: $condition) {
      id
      userId
      regionId
      user {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
      region {
        id
        name
        banner
        bio
        Fields {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUserRegion = /* GraphQL */ `
  mutation UpdateUserRegion(
    $input: UpdateUserRegionInput!
    $condition: ModelUserRegionConditionInput
  ) {
    updateUserRegion(input: $input, condition: $condition) {
      id
      userId
      regionId
      user {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
      region {
        id
        name
        banner
        bio
        Fields {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUserRegion = /* GraphQL */ `
  mutation DeleteUserRegion(
    $input: DeleteUserRegionInput!
    $condition: ModelUserRegionConditionInput
  ) {
    deleteUserRegion(input: $input, condition: $condition) {
      id
      userId
      regionId
      user {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
      region {
        id
        name
        banner
        bio
        Fields {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
