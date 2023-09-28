/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
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
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getField = /* GraphQL */ `
  query GetField($id: ID!) {
    getField(id: $id) {
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
export const listFields = /* GraphQL */ `
  query ListFields(
    $filter: ModelFieldFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFields(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const fieldsByRegionID = /* GraphQL */ `
  query FieldsByRegionID(
    $regionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFieldFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fieldsByRegionID(
      regionID: $regionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getRegion = /* GraphQL */ `
  query GetRegion($id: ID!) {
    getRegion(id: $id) {
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
export const listRegions = /* GraphQL */ `
  query ListRegions(
    $filter: ModelRegionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserRegion = /* GraphQL */ `
  query GetUserRegion($id: ID!) {
    getUserRegion(id: $id) {
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
export const listUserRegions = /* GraphQL */ `
  query ListUserRegions(
    $filter: ModelUserRegionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRegions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        regionId
        user {
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
        region {
          id
          name
          banner
          bio
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userRegionsByUserId = /* GraphQL */ `
  query UserRegionsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserRegionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userRegionsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        regionId
        user {
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
        region {
          id
          name
          banner
          bio
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userRegionsByRegionId = /* GraphQL */ `
  query UserRegionsByRegionId(
    $regionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserRegionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userRegionsByRegionId(
      regionId: $regionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        regionId
        user {
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
        region {
          id
          name
          banner
          bio
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
